# Vite + React + TypeScript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs['recommended-typescript'],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

<div align="center">

# ⚡ Vite + React + TypeScript Starter

🚀 Zamonaviy, tez va kengaytiriladigan front-end shablon
🧠 Qurilgan: **Vite + React + TypeScript**

[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-149ECA?logo=react&logoColor=fff)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github)](https://ulmasjon96.github.io/ViteReactTypeScript/)

</div>

---

## 🌐 Live Demo

🎯 **Saytni ko‘rish:**
🔗 [https://ulmasjon96.github.io/ViteReactTypeScript/](https://ulmasjon96.github.io/ViteReactTypeScript/)

---

## 📖 Loyihaning tavsifi

Bu loyiha — **Vite**, **React** va **TypeScript** asosida qurilgan **zamonaviy front-end shablon**.
U tezkor development server, modular komponentlar, toza kod arxitekturasi va professional konfiguratsiyani o‘z ichiga oladi.

---

## 🧩 Texnologiyalar

| Texnologiya               | Maqsadi                                     |
| ------------------------- | ------------------------------------------- |
| ⚡ **Vite**               | Tezkor development server va build tizimi   |
| ⚛️ **React**              | UI komponentlarini yaratish uchun kutubxona |
| 🧠 **TypeScript**         | Xatolarga chidamli, turlarga ega JavaScript |
| 🧹 **ESLint + Prettier**  | Kod sifatini va tozaligini ta’minlash       |
| 🧭 **React Router**       | Sahifalar orasida navigatsiya               |
| 🎨 **SCSS / CSS Modules** | Modular va oson boshqariladigan stillar     |

---

## 🗂 Loyihaning struktura tuzilmasi
