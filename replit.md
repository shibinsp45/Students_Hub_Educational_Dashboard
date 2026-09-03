# EduManage

EduManage is a responsive student management dashboard for tracking learners, attendance, academic work, deadlines, and campus activity.

## Run & Operate

- `pnpm --filter @workspace/edumanage run dev` — run the EduManage web app
- `pnpm --filter @workspace/edumanage run typecheck` — typecheck the web app
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React, TypeScript, Vite, Tailwind CSS
- UI: Lucide React, Recharts, Wouter, Sonner
- Data: local mock data with localStorage persistence for the first release

## Where things live

- `artifacts/edumanage/src/App.tsx` — app shell, routing, shared layout, and page implementations
- `artifacts/edumanage/src/lib/mock-data.ts` — realistic student-management seed data
- `artifacts/edumanage/src/index.css` — shared theme tokens, light/dark palettes, and utility styles
- `artifacts/edumanage/src/pages/not-found.tsx` — fallback route

## Architecture decisions

- The first release is frontend-only so administrators can explore the full workflow without provisioning a backend.
- Student CRUD and attendance changes persist locally, keeping the demo functional across reloads while leaving a clean seam for API integration later.
- Voice entry uses the browser SpeechRecognition API when available and falls back to the typed command palette.
- Wouter keeps route handling lightweight while preserving the requested student and project detail URLs.

## Product

Administrators can review campus health at a glance, manage students, update attendance, track projects and assignments, review exams, browse the timetable, read messages, manage events, generate reports, and configure workspace preferences. The interface includes desktop, tablet, and mobile layouts, a command palette, voice-friendly quick add, and persistent light/dark themes.

## User preferences

- Keep the experience minimal, responsive, keyboard-friendly, and easy to extend with voice.

## Gotchas

- Voice commands depend on browser SpeechRecognition support; unsupported browsers retain the full typed quick-add flow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
