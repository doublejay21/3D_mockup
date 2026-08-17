"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  Send, Bot, User, Sparkles, ImagePlus, Loader2,
  Download, Plus, Wand2, RotateCcw, Share2,
} from 'lucide-react';
import House3DViewer, { HouseData } from '@/components/House3DViewer';

// ── Compress image ─────────────────────────────────────────────────────────
async function compressImage(file: File, maxPx = 1920): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Cannot read file'));
    reader.onload = (e) => {
      const dataUrl = e.target!.result as string;
      const img = new Image();
      img.onerror = () => resolve(dataUrl);
      img.onload = () => {
        if (img.width <= maxPx && img.height <= maxPx) { resolve(dataUrl); return; }
        let w = img.width, h = img.height;
        if (w >= h && w > maxPx) { h = Math.round(h * maxPx / w); w = maxPx; }
        else if (h > maxPx)      { w = Math.round(w * maxPx / h); h = maxPx; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) { resolve(dataUrl); return; }
        ctx.drawImage(img, 0, 0, w, h);
        const mime = ['image/png','image/jpeg','image/webp'].includes(file.type) ? file.type : 'image/jpeg';
        resolve(canvas.toDataURL(mime, mime === 'image/png' ? undefined : 0.88));
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  });
}

// ── Types ──────────────────────────────────────────────────────────────────
interface Msg {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  images: string[];
  isLoading: boolean;
  isError: boolean;
  houseData: HouseData | null;
}

const WELCOME: Msg = {
  id: 'welcome', sender: 'ai',
  text: 'สวัสดีครับ! ผมคือ AI Interior Designer 🛋️✨\n\nอัปโหลด Floor Plan แล้วระบบจะวิเคราะห์โครงสร้างและสร้างโมเดล 3D ที่สามารถหมุนและซูมได้ครับ',
  images: [], isLoading: false, isError: false, houseData: null,
};

const LOADING_TEXTS = [
  'กำลังวิเคราะห์แปลนห้อง...', 'กำลังคำนวณโครงสร้าง 3D...',
  'AI กำลังสร้างโมเดลให้คุณ...', 'ใกล้เสร็จแล้ว รออีกนิดนะครับ...',
];

const STYLE_CHIPS = ['Modern Luxury', 'Minimalist', 'Muji', 'Industrial', 'Japandi', 'Nordic'];

// ── Component ──────────────────────────────────────────────────────────────
export default function Page() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [files,    setFiles]    = useState<File[]>([]);
  const [prompt,   setPrompt]   = useState('');
  const [busy,     setBusy]     = useState(false);

  const bottomRef   = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isWelcome   = messages.length === 1 && messages[0].id === 'welcome';

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }, [prompt]);

  useEffect(() => {
    if (!busy) return;
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % LOADING_TEXTS.length;
      setMessages(prev => prev.map(m => m.isLoading ? { ...m, text: LOADING_TEXTS[i] } : m));
    }, 7000);
    return () => clearInterval(t);
  }, [busy]);

  const addFiles  = (fl: FileList | null) => {
    if (!fl || fl.length === 0) return;
    setFiles(prev => [...prev, ...Array.from(fl)]);
  };
  const removeFile = (i: number) => setFiles(f => f.filter((_, idx) => idx !== i));
  const canSend    = (!!prompt.trim() || files.length > 0) && !busy;

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); if (canSend) submit(); }
  };

  const downloadHouse = (data: HouseData) => {
    const a = Object.assign(document.createElement('a'), {
      href: URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })),
      download: `house-${Date.now()}.json`,
    });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  const reset = () => { setMessages([WELCOME]); setFiles([]); setPrompt(''); };

  const submit = async () => {
    if (!canSend) return;
    const curFiles = [...files]; const curPrompt = prompt.trim();
    setFiles([]); setPrompt('');

    const userMsg: Msg = {
      id: Date.now().toString(), sender: 'user', text: curPrompt,
      images: curFiles.map(f => URL.createObjectURL(f)),
      isLoading: false, isError: false, houseData: null,
    };
    const aiMsg: Msg = {
      id: (Date.now() + 1).toString(), sender: 'ai', text: LOADING_TEXTS[0],
      images: [], isLoading: true, isError: false, houseData: null,
    };

    setMessages(prev => [...prev, userMsg, aiMsg]);
    setBusy(true);

    try {
      let fileBase64: string | null = null;
      if (curFiles.length > 0) {
        try { fileBase64 = await compressImage(curFiles[0]); }
        catch (e) { console.warn('Compress failed:', e); }
      }

      const payload: Record<string, unknown> = {};
      if (curPrompt)  payload.prompt = curPrompt;
      if (fileBase64) payload.file   = fileBase64;

      const res  = await fetch('/api/webhook', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log('Response:', data);

      const house: HouseData | null = data?.house ?? null;
      setMessages(prev => prev.map(m => m.id === aiMsg.id ? {
        ...m, isLoading: false,
        text:      house ? 'สร้าง 3D โมเดลเสร็จเรียบร้อยแล้วครับ ✨ ลองหมุนและซูมดูได้เลย'
                         : (data?.error ?? 'รับคำสั่งแล้วครับ แต่ยังไม่ได้รับข้อมูลโมเดล 3D กลับมา'),
        houseData: house,
      } : m));
    } catch (err: any) {
      setMessages(prev => prev.map(m => m.id === aiMsg.id ? {
        ...m, isLoading: false, isError: true,
        text: 'เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่อีกครั้งครับ',
      } : m));
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <div className="bg-canvas" aria-hidden />
      <div className="bg-grid"   aria-hidden />

      <div className="app-shell">
        {/* ═══════════ SIDEBAR ═══════════ */}
        <aside className="sidebar">
          {/* Logo */}
          <div className="sidebar-logo">
            <div className="logo-mark"><Sparkles size={20} /></div>
            <div className="logo-text">
              <strong>AI Interior Studio</strong>
              <span>Powered by PromptXAI</span>
            </div>
          </div>

          {/* New project */}
          <button className="new-project-btn" onClick={reset}>
            <Plus size={15} /> โปรเจกต์ใหม่
          </button>

          {/* Features */}
          <div>
            <p className="sidebar-section-title">ความสามารถ</p>
            <div className="feature-list">
              {[
                { icon: '🖼️', cls: 'fi-purple', title: 'วิเคราะห์แปลน',     sub: 'อ่านผังห้องจากภาพ' },
                { icon: '🏠', cls: 'fi-blue',   title: 'สร้าง 3D โมเดล',    sub: 'Three.js real-time' },
                { icon: '🔄', cls: 'fi-cyan',   title: 'หมุน & ซูม',        sub: 'Interactive viewer' },
                { icon: '📐', cls: 'fi-green',  title: 'ข้อมูลมิติจริง',     sub: 'หน่วยเป็นเมตร' },
              ].map(f => (
                <div className="feature-item" key={f.title}>
                  <div className={`feature-icon ${f.cls}`}>{f.icon}</div>
                  <div className="feature-info">
                    <strong>{f.title}</strong>
                    <span>{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div>
            <p className="sidebar-section-title">สไตล์ยอดนิยม</p>
            <div className="hero-chips" style={{ justifyContent: 'flex-start' }}>
              {STYLE_CHIPS.map(s => (
                <span key={s} className="chip" onClick={() => setPrompt(p => p ? `${p}, สไตล์ ${s}` : `สไตล์ ${s}`)}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <p>AI จะวิเคราะห์แปลนห้องและสร้างโมเดล 3D<br />จากภาพที่คุณอัปโหลดครับ</p>
          </div>
        </aside>

        {/* ═══════════ MAIN PANEL ═══════════ */}
        <div className="main-panel">
          {/* Top bar */}
          <header className="top-bar">
            <div className="page-title">
              <div className="status-dot" />
              AI Interior Designer
            </div>
            <div className="top-actions">
              <button className="top-btn" onClick={reset}>
                <RotateCcw size={13} /> รีเซ็ต
              </button>
            </div>
          </header>

          {/* Messages */}
          <main className="messages-area">
            {/* Hero — shown only when no conversation yet */}
            {isWelcome && (
              <div className="welcome-hero">
                <div className="hero-icon">🏛️</div>
                <div className="hero-title">
                  ออกแบบห้องด้วย<br />
                  <span>AI 3D Interior</span>
                </div>
                <p className="hero-sub">
                  อัปโหลดรูปแปลนห้อง หรือรูปห้องว่าง<br />
                  AI จะวิเคราะห์และสร้างโมเดล 3D ให้คุณทันที
                </p>
                <div className="hero-chips">
                  {STYLE_CHIPS.map(s => (
                    <span key={s} className="chip"
                      onClick={() => setPrompt(p => p ? `${p}, สไตล์ ${s}` : `สไตล์ ${s}`)}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Chat messages (skip welcome when hero is shown) */}
            {messages.filter(m => !(isWelcome && m.id === 'welcome')).map(msg => (
              <div key={msg.id} className={`msg-row ${msg.sender}`}>
                <div className={`avatar ${msg.sender}`}>
                  {msg.sender === 'ai' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={`bubble ${msg.sender}${msg.isError ? ' error' : ''}`}>
                  {msg.isLoading ? (
                    <>
                      <div className="dots"><span /><span /><span /></div>
                      <div className="loading-text">{msg.text}</div>
                    </>
                  ) : (
                    <>
                      {msg.text && <div style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</div>}
                      {msg.images.length > 0 && (
                        <div className="bubble-images">
                          {msg.images.map((src, i) => (
                            <div key={i} className={`image-scan-container ${msg.isLoading ? 'scanning' : ''}`}>
                              <img src={src} alt="upload" />
                              {msg.isLoading && <div className="scan-line" />}
                            </div>
                          ))}
                        </div>
                      )}
                      {msg.houseData && (
                        <div className="viewer-wrap">
                          <div className="viewer-label">
                            <span>🏠</span> 3D Floor Plan Model — ลองหมุนและซูมด้วยเมาส์ได้เลย
                          </div>
                          <House3DViewer house={msg.houseData} />
                          <button className="download-btn" onClick={() => downloadHouse(msg.houseData!)}>
                            <Download size={13} /> โหลดข้อมูล 3D (JSON)
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </main>

          {/* Input */}
          <footer className="input-zone">
            {files.length > 0 && (
              <div className="previews">
                {files.map((f, i) => (
                  <div key={i} className="thumb">
                    <img src={URL.createObjectURL(f)} alt="preview" />
                    <button className="thumb-rm" onClick={() => removeFile(i)}>✕</button>
                  </div>
                ))}
              </div>
            )}

            <div className="input-box">
              <label className="attach-btn" title="แนบรูปภาพ"
                style={{ opacity: busy ? 0.4 : 1, pointerEvents: busy ? 'none' : 'auto' }}>
                <input type="file" accept="image/*" multiple onChange={e => addFiles(e.target.files)} />
                <ImagePlus size={18} />
              </label>

              <textarea
                ref={textareaRef}
                className="chat-input"
                rows={1}
                placeholder="อัปโหลดแปลนห้อง หรือบอกสไตล์ที่ต้องการ..."
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                onKeyDown={onKeyDown}
                disabled={busy}
              />

              <button className={`send-btn${canSend ? ' active' : ''}`}
                onClick={submit} disabled={!canSend}>
                {busy ? <Loader2 size={17} className="spin" /> : <Wand2 size={17} />}
              </button>
            </div>
            <p className="input-hint">Enter ส่ง • Shift+Enter ขึ้นบรรทัดใหม่ • รองรับ PNG, JPG, WebP</p>
          </footer>
        </div>
      </div>
    </>
  );
}