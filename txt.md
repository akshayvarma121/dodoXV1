
**Yo Squad! @Vaishnavi @Ajeth — Slice 1 (Auth & Shell) is officially LIVE on the repo.** 🚀

I’ve finished the core authentication and the "Mission Control" UI wrapper. It’s moving away from that basic AI-grid look and toward a **Neo-Brutalist / Streetwear** vibe (Acid Yellow, Hard Shadows, Bold Type).

**What’s been implemented:**

* **Custom Auth:** High-contrast Clerk Login & Sign-up pages (No white-box glitches).
* **Floating Navigation:** A modern "Pill Nav" that only appears when you're logged in.
* **Access Control:** The app is locked. If you aren't logged in, you can only see the Entry screen.
* **Environment Sync:** Redirects are set so we stay inside the DX. app, not the Clerk portal.
* **Tech Stack:** Next.js 15+, Clerk Core 3, Tailwind, Fira Code.

**Your Tasks (The Next Slices):**

1. **@Vaishnavi (Kanban/Board):** Start building the `/board` route. Use the `Layout` I built; it will automatically give you the floating nav. Focus on the Drag-and-Drop for tasks.
2. **@Ajeth (Code Editor):** Start the `/editor` route. We need a clean, distraction-free IDE vibe here.
3. **Environment Setup:** You **MUST** run `npm install` and create a `.env.local` file (I’ll DM the keys) or the app will crash.

---


# DoDoX_ [v1.0.0]
> High-density collaborative workspace for developer squads.

## 🛠 Currently Implemented (Slice 1)
- **Custom Authentication**: Fully themed Clerk integration (Sign-in/Sign-up) with a Neo-Brutalist "Streetwear" aesthetic.
- **Global Layout Shell**: Floating glass-morphism pill navigation for authenticated users.
- **Protected Routes**: Middleware/Proxy logic ensuring `/board` and `/editor` are restricted to squad members.
- **Dynamic Theming**: Custom HEX-overrides for Clerk components to match the `#09090b` (Deep Zinc) and `#ccff00` (Acid Yellow) palette.

---

## 🚀 Setup Instructions for the Team

### 1. Clone & Install
```bash
git pull origin main
npm install

```

### 2. Environment Variables

You **must** create a `.env.local` file in the root directory. Copy the keys provided in our private chat:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

```

### 3. Run Dev Server

```bash
npm run dev

```

---

## 🗺 Roadmap (What's Next?)

### Slice 2: The War Room (Vaishnavi)

* [ ] Implementation of the Kanban Board.
* [ ] Real-time task status updates.
* [ ] Drag-and-drop functionality for ticket management.

### Slice 3: The Sync Editor (Ajeth)

* [ ] Integrated code editor component.
* [ ] Multi-user cursor tracking.
* [ ] Syntax highlighting for core dev languages.

---

## 🎨 UI Guidelines

* **Font**: Fira Code (Monospace) / Modern Sans (Bold).
* **Primary Color**: `#ccff00` (Acid Yellow).
* **Secondary Color**: `#00ffff` (Electric Cyan).
* **Background**: `#09090b` (Deep Zinc).
* **Style**: Hard 2px borders, solid shadows, asymmetrical layouts.

```

---

### One final check for you:
Before you log off, double-check that your **`.env.local`** file has those four `NEXT_PUBLIC_CLERK_...` URLs I sent in the previous turn. If you don't add those, the "Sign Up" link on your login page will still try to go to the white Clerk website instead of your cool new page.



```