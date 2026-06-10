# Grace Engineering - Digital Experience 🚀

Welcome to the digital storefront and web application for **Grace Engineering**—a premium showcase designed to demonstrate cutting-edge capabilities, precision machining, and modern industrial services. 

This repository serves as the official source code for the client project, specifically configured to be demoed and hosted effortlessly via **Vercel**.

## 🌟 Key Features

- **Immersive 3D Graphics**: Integrates `three.js` and `@react-three/fiber` for interactive 3D model manipulation (e.g., the spinning, interactive industrial gear on the Hero page).
- **Premium Animations**: Powered by `framer-motion` for buttery smooth reveal effects, page transitions, and micro-interactions.
- **Dynamic Routing & Architecture**: Built entirely on **Next.js 14** (App Router) for lightning-fast server-side rendering, SEO optimization, and snappy client-side navigation.
- **Bespoke UI Design**: A custom dark-mode aesthetic utilizing Tailwind CSS, intricate gradient meshes, noise filters, and glassmorphism UI components.
- **Smooth Global Navigation**: Native smooth-scrolling architecture mapping to strictly defined anchor points across the single-page/multi-page hybrid layout.
- **Interactive Maps**: A bespoke 3D-styled interactive location map connecting users directly to Grace Engineering's physical address.
- **Fully Responsive**: Flawless visual scaling from ultra-wide desktop monitors down to mobile devices without compromising the 3D aesthetic.

## 🚀 Live Demo & Deployment (Vercel)

This project is explicitly designed for a **zero-configuration deployment** to Vercel. Vercel acts as the hosting provider for the Grace Engineering client demo.

### How it works:
1. **Continuous Deployment**: This GitHub repository is linked directly to a Vercel project.
2. **Automated Builds**: Whenever a commit is pushed to the `main` branch, Vercel automatically detects the changes, runs the Next.js build process, and deploys it globally.
3. **Edge Delivery**: Vercel serves the application via their Edge Network, guaranteeing ultra-low latency load times regardless of the client's location.

### Running Locally

If you want to spin up the application on your own machine:

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: React 18 / Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Rendering**: Three.js / React Three Fiber / React Three Drei
- **Icons**: Lucide React
- **Hosting**: Vercel
