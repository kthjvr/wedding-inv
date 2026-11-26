const s = (cls, d) => `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
export const SECTION_ICONS = {
  calendar: s("event-section-icon", '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/>'),
  map: s("event-section-icon", '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  dressCode: s("section-icon", '<path d="M9 3l3 3 3-3 5 4-3 4-2-1v11H9V10l-2 1-3-4z"/>'),
  rsvp: s("rsvp-emoji", '<path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/>'),
  guest: s("event-section-icon", '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>')
};