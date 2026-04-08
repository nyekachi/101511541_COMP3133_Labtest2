# 101511541-lab-test2-comp3133

## Harry Potter Characters — COMP3133 Lab Test 2

An Angular 17 application that fetches and displays Harry Potter character data using the [HP API](https://hp-api.onrender.com/).

---

## Features Implemented

- **Character List** — Displays all characters with name, house, and photo in a responsive grid
- **Search** — Live search by name or house on the character list
- **Filter by House** — Dropdown to filter characters by Gryffindor, Slytherin, Hufflepuff, or Ravenclaw
- **Character Details** — Full detail view with species, ancestry, wand, patronus, actor, and more
- **Angular Signals** — State managed with `signal()` and `computed()` throughout all components
- **New Control Flow** — `@for`, `@if`, `@switch` used in all templates
- **Angular Material** — MatCard, MatToolbar, MatSelect, MatFormField, MatSpinner, MatButton, MatIcon, MatDivider, MatTooltip
- **Routing** — `/` list, `/filter` filter page, `/character/:id` details page
- **TypeScript Interface** — `Character` and `Wand` interfaces in `src/app/models/character.ts`
- **Service** — `HpapiService` in `src/app/network/hpapi.service.ts`

---

## Screenshots

> *(Add screenshots here after running the app)*

### Character List
![Character List](screenshots/character-list.png)

### Filter by House
![Filter by House](screenshots/filter.png)

### Character Details
![Character Details](screenshots/details.png)

---

## Instructions to Run

### Prerequisites
- Node.js 18+
- Angular CLI 17: `npm install -g @angular/cli`

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/101511541-lab-test2-comp3133.git
cd 101511541-lab-test2-comp3133

# 2. Install dependencies
npm install

# 3. Start the dev server
ng serve

# 4. Open in browser
# Navigate to http://localhost:4200
```

### Build for Production

```bash
ng build
```

---

## API Reference

| Endpoint | Description |
|----------|-------------|
| `GET https://hp-api.onrender.com/api/characters` | All characters |
| `GET https://hp-api.onrender.com/api/characters/house/:house` | Characters by house |
| `GET https://hp-api.onrender.com/api/character/:id` | Single character by ID |

> **Note:** The API is hosted on Render's free tier. The first request may take ~30 seconds to wake up.

---

## Deployment

Live app: [Add your Vercel/Render link here]

---

## Student Info

- **Student ID:** 101511541
- **Course:** COMP3133 — Full Stack Development II
- **Term:** Winter 2026
