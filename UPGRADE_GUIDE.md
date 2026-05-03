# Next.js Upgrade Guide (Hinglish/Urdu)

Bilkul bhai, Next.js project ko complete update karte hain. Dependencies (Next, React waghera) purani ho gayi hain toh yeh steps follow karo.

## 1. Pehle Backup Le Lo
Poora project folder copy kar lo (Git pe commit kar do agar nahi kiya).

## 2. Current Versions Check Karo
Project root mein terminal kholo aur ye command run karo:

```bash
npm outdated
# ya agar pnpm use kar rahe ho:
pnpm outdated
# ya yarn:
yarn outdated
```

## 3. Sabse Best aur Official Tarika (Recommended)
Agar Next.js 16.1+ version pe ho:

```bash
# npm
npx next upgrade

# pnpm
pnpm next upgrade

# yarn
yarn next upgrade
```

Agar purana version hai (16.1 se pehle):

```bash
npx upgrade latest
```

## 4. Manual Update (Sabse Reliable)

```bash
# npm users
npm install next@latest react@latest react-dom@latest eslint-config-next@latest

# pnpm users
pnpm add next@latest react@latest react-dom@latest eslint-config-next@latest

# yarn users
yarn add next@latest react@latest react-dom@latest eslint-config-next@latest
```

## 5. Sab Dependencies Update Karne Ka Tarika
Safest way (recommended for old projects): **npm-check-updates** tool use karo:

```bash
npx npm-check-updates -u
```

Phir install karo:

```bash
npm install
# ya pnpm install / yarn install
```

Ya interactive way (pnpm best hai iske liye):

```bash
pnpm up --interactive --latest
```

## 6. Important Steps After Update

```bash
# Cache clear karo
rm -rf .next
rm -rf node_modules
# phir install karo (upar wali command se)

npm run build
```

### Errors aaye toh:
1. Next.js official upgrade guide check karo: [https://nextjs.org/docs/app/guides/upgrading](https://nextjs.org/docs/app/guides/upgrading)
2. Version specific guide dekho (15 → 16 waghera).
3. Codemod run karo agar chahiye:
   ```bash
   npx @next/codemod@latest upgrade latest .
   ```

## Common Issues (Old Projects Mein)
- React 19 peer dependency warnings → `--force` ya `--legacy-peer-deps` use kar sakte ho pehle.
- Kuch libraries (headlessui, framer-motion etc.) React 19 support ke liye update karna padega.
- `next.config.js` mein breaking changes ho sakte hain.
- App Router vs Pages Router ke hisaab se changes.

---

### Recent Upgrade Summary (May 2026)
Aapka project Next.js **15.3.1** se **16.2.4** tak update ho chuka hai. React 19 bhi latest version (**19.2.5**) pe hai.

**Specific Commands used:**
```bash
npx npm-check-updates -u
npm install
```

**Key Version Changes:**
- `next`: 15.3.1 → 16.2.4
- `react`: 19.1.0 → 19.2.5
- `typescript`: ^5 → ^6
- `eslint`: ^9 → ^10
- `tailwindcss`: ^4.1.5 → ^4.2.4
