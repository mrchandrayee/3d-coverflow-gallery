# 🌌 Cosmic Flow — 3D Coverflow Gallery

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/3d-coverflow-gallery/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vanilla JavaScript](https://img.shields.io/badge/Vanilla%20JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**Cosmic Flow** is a responsive, dependency-free 3D coverflow gallery built with HTML, CSS, and vanilla JavaScript. It presents five original, CSS-crafted scenes in a cinematic carousel with keyboard, pointer, and touch interaction.

> Live experience: **[mrchandrayee.github.io/3d-coverflow-gallery](https://mrchandrayee.github.io/3d-coverflow-gallery/)**

---

## ✨ Features

- **3D coverflow presentation** — perspective, layered depth, rotation, and scale transitions.
- **Five original scenes** — visual artwork composed in CSS; no external image assets are required for the scenes.
- **Navigation controls** — previous/next buttons, pagination dots, and clickable cards.
- **Keyboard support** — use the left and right arrow keys to navigate; Space toggles autoplay when the page body is focused.
- **Pointer and touch gestures** — swipe or drag horizontally to move between scenes.
- **Autoplay** — automatic scene rotation with a play/pause control; pauses while the browser tab is hidden.
- **Responsive layout** — adapts to desktop and mobile screen sizes.
- **Accessibility considerations** — semantic buttons, accessible labels, current-slide state, and reduced-motion styling.
- **No framework or build pipeline** — no npm install, bundler, or runtime dependency.

## 🎞️ Scenes

| # | Scene | Category | Description |
|---|---|---|---|
| 01 | **Lunar Dreams** | Nightscape | A quiet night beneath the moon |
| 02 | **Solar Bloom** | Afterglow | Where light meets the horizon |
| 03 | **Golden Hour** | Stillness | A moment suspended in time |
| 04 | **Silent Peaks** | Highlands | Find your own way above the clouds |
| 05 | **Crimson Dusk** | Deep Space | The last light of another world |

## 🚀 Run locally

The current gallery uses regular script loading and can be opened directly in a browser. For the most reliable local preview, use a local HTTP server:

```bash
git clone https://github.com/mrchandrayee/3d-coverflow-gallery.git
cd 3d-coverflow-gallery
python3 -m http.server 8000
```

Open **http://localhost:8000**.

No package installation or build command is required.

## 🎮 Controls

| Action | Control |
|---|---|
| Previous scene | Previous button or `←` |
| Next scene | Next button or `→` |
| Select a scene | Click a card or pagination dot |
| Navigate on touch devices | Swipe/drag horizontally |
| Pause or resume autoplay | Play/pause button |
| Toggle autoplay from keyboard | `Space` when the page body is focused |

## 📁 Project structure

```text
3d-coverflow-gallery/
├── index.html          # Page structure, scene markup, and metadata
├── style.css           # Visual design, CSS artwork, 3D transforms, responsive rules
├── script.js           # Gallery state, navigation, autoplay, and pointer gestures
├── gallery-data.js     # Scene metadata module for the modular gallery architecture
├── gallery-config.js   # Default settings and layout preset definitions
├── LICENSE             # MIT license
└── README.md           # Project documentation
```

### Modular architecture note

`gallery-data.js` and `gallery-config.js` are included as the foundation for the next modular gallery iteration. The currently served page still renders its five scene cards from `index.html` and runs the active interactions from `script.js`; the two ES modules are not yet imported by that runtime.

## 🧰 Built with

- HTML5
- CSS3 (3D transforms, gradients, transitions, media queries)
- Vanilla JavaScript (DOM events and browser APIs)

## 🌐 Deployment

The project is published as a static site using **GitHub Pages**:

- Repository: [github.com/mrchandrayee/3d-coverflow-gallery](https://github.com/mrchandrayee/3d-coverflow-gallery)
- Live site: [mrchandrayee.github.io/3d-coverflow-gallery](https://mrchandrayee.github.io/3d-coverflow-gallery/)

GitHub Pages serves the repository's static files; there is no server-side application or build step.

## 👨‍💻 Author

**mrchandrayee**

- GitHub: [@mrchandrayee](https://github.com/mrchandrayee)

## 📄 License

Released under the [MIT License](./LICENSE).
