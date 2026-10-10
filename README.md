# A Little Surprise — Vercel-ready

A responsive React + Vite website with a 3D flipping card that reveals a message. No backend or environment variables required.

## Run it locally

1. Install Node.js (LTS) from https://nodejs.org/
2. Extract this folder and open a terminal inside it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite.

## Deploy to Vercel

### Option A — Upload through GitHub (recommended)

1. Create a new repository on GitHub.
2. Upload the contents of this project folder (not the ZIP itself).
3. Go to https://vercel.com/ and sign in.
4. Choose **Add New → Project**, then import your repository.
5. Vercel should detect Vite automatically. Use:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**.

### Option B — Vercel CLI

Install Node.js, then run inside the project folder:

```bash
npm install
npm run build
npx vercel
```

Follow the prompts. For production deployment, run `npx vercel --prod`.

## Change the revealed message

Open `src/main.jsx` and edit the text inside the `.message` element. You can also change the headline, subtitle, and small labels in that file.

## Project structure

```text
flip-reveal-vercel/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── style.css
```
