// Simple in-memory store for async results
// In production, replace with Redis or a database

const store = new Map<string, { data: unknown; timestamp: number }>();

// Clean up old entries after 5 minutes
const EXPIRY_MS = 5 * 60 * 1000;

export function saveResult(sessionId: string, data: unknown) {
  store.set(sessionId, { data, timestamp: Date.now() });
}

export function getResult(sessionId: string) {
  const entry = store.get(sessionId);
  if (!entry) return null;
  // Expired?
  if (Date.now() - entry.timestamp > EXPIRY_MS) {
    store.delete(sessionId);
    return null;
  }
  return entry.data;
}

export function deleteResult(sessionId: string) {
  store.delete(sessionId);
}
