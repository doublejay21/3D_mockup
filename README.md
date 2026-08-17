# 3D Room Mockup + IKEA Integration 🛋️

โปรเจกต์สำหรับจำลองการตกแต่งห้องแบบ 3 มิติบนเว็บเพจ โดยผู้ใช้สามารถปรับเปลี่ยนสีผนัง ลายพื้น และค้นหาเฟอร์นิเจอร์จริงจาก IKEA เพื่อดึงโมเดล 3D มาลากวางตกแต่งในห้องจำลองได้แบบ Real-time

## ✨ ฟีเจอร์หลัก (Features)
- 🎨 **Custom Materials:** เปลี่ยนสีผนัง (รองรับ Hex Code และ Color Picker) และลายพื้นผิวต่างๆ (ไม้, กระเบื้อง, ปูน) ได้ทันที
- 🔍 **IKEA Live Search:** ค้นหาสินค้าจากสต็อกของ IKEA ผ่าน API ได้โดยตรง
- 📦 **3D Furniture Placement:** ดึงไฟล์ 3D (GLB/GLTF) ของเฟอร์นิเจอร์มาวางในห้องจำลอง พร้อมระบบลากจัดวาง (Drag & Drop) ได้อย่างอิสระ
- 📸 **Snapshot & Fullscreen:** มีระบบถ่ายรูปห้องเก็บไว้ และโหมดเต็มจอเพื่อความสมจริง

## 🛠️ โครงสร้างเทคโนโลยี (Tech Stack)
* **Frontend:** Next.js, React, Three.js (`@react-three/fiber`, `@react-three/drei`)
* **Backend:** Python, FastAPI, `ikea-api` (Unofficial IKEA API client)

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (How to run)

โปรเจกต์นี้แบ่งออกเป็น 2 ส่วนที่ต้องรันพร้อมกัน (เปิด 2 Terminal)

### 1. ฝั่ง Backend (FastAPI)
ทำหน้าที่เป็นตัวกลางในการดึงข้อมูลและโมเดล 3D จากเซิร์ฟเวอร์ IKEA 
```bash
# 1. เข้าไปที่โฟลเดอร์ backend
cd backend

# 2. ติดตั้งแพ็กเกจที่จำเป็น
pip install -r requirements.txt

# 3. รันเซิร์ฟเวอร์
uvicorn main:app --reload
```
> เซิร์ฟเวอร์จะรันอยู่ที่ `http://localhost:8000` (สามารถทดสอบ API ได้ที่ `http://localhost:8000/docs`)

### 2. ฝั่ง Frontend (Next.js)
หน้าเว็บหลักที่ใช้แสดงผล 3D
```bash
# 1. อยู่ที่โฟลเดอร์หลัก (3D-mockup)
npm install

# 2. รันหน้าเว็บ
npm run dev
```
> หน้าเว็บจะรันอยู่ที่ `http://localhost:3000`

---

## 📝 หมายเหตุ
* สินค้าบางชิ้นจาก IKEA อาจไม่มีไฟล์โมเดล 3D ให้บริการ หากค้นหาแล้วไม่มีโมเดล ระบบจะแจ้งเตือนให้ทราบ
* การเชื่อมต่อบางครั้งอาจใช้เวลาสักครู่ในการดึงไฟล์ GLB จากเซิร์ฟเวอร์ของ IKEA 
