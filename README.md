# Sere Innovations - Smart Egg Incubator

> Empowering small poultry farmers with smart, affordable, and easy-to-use egg incubators to hatch their own future.

## Overview
Sere Innovations is a premium, high-performance landing page application built to showcase the **Smart Egg Incubator**. The platform is designed with a modern, high-conversion user interface tailored specifically for the agriculture sector. It provides rural and small-scale poultry farmers with detailed product specifications, transparent pricing, and a seamless enquiry experience.

## ✨ Key Features
- **Modern Architecture**: Built using the latest Next.js App Router for optimal performance, SEO, and lightning-fast page loads.
- **Fully Responsive Design**: A flawless viewing experience across all devices, featuring a custom mobile navigation menu (hamburger toggle) and adaptive grid layouts.
- **Global Enquiry System**: 
  - A state-driven, off-canvas `EnquirySidebar` accessible from any button in the app via custom DOM events (`open-enquiry`).
  - Clean, reusable `EnquiryForm` component handling user state and logic.
  - Stunning **glassmorphism** success popups for premium UX feedback upon form submission.
- **Multi-page Routing**:
  - `Home (/)`: The main high-conversion landing page.
  - `About Us (/about)`: Detailed company mission, vision, and philosophy.
  - `Learn More (/learn-more)`: A deep technical dive into the science of incubation (microclimate control, biomimetic turning, digital interfaces).
  - `Pricing (/pricing)`: Transparent product pricing centered around the Standard Incubator.
- **Premium Aesthetics**: A cohesive Emerald-themed color palette with subtle micro-animations, background gradients, backdrop blurs, and polished iconography.

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Optimized Next/Font integrations

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository and navigate into the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will auto-update as you edit the files.

### Build for Production
To generate a highly optimized static production build:
```bash
npm run build
npm run start
```

## 📁 Project Structure

```text
/sere-innovations
│
├── /app                    # Next.js App Router Directory
│   ├── layout.tsx          # Root layout (includes global Navbar, Footer, and Enquiry Sidebar)
│   ├── page.tsx            # Main Landing Page
│   ├── /about/page.tsx     # About Us Page
│   ├── /learn-more/page.tsx# Detailed Product Science Page
│   └── /pricing/page.tsx   # Pricing Page
│
├── /components             # Reusable React Components
│   ├── Navbar.tsx          # Responsive navigation header
│   ├── Footer.tsx          # Global footer
│   ├── EnquirySidebar.tsx  # Global off-canvas slide-out modal
│   ├── EnquiryForm.tsx     # Clean, standalone form logic and UI
│   └── ...                 # Landing page sections (Hero, Features, CTA, Problem, etc.)
│
├── /public                 # Static assets (images, logos)
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.ts          # Next.js configuration (configured for external image domains)
```

## 💡 Custom Event Architecture
The application uses a decoupled event-driven architecture to trigger the Enquiry Sidebar. Instead of passing props down through multiple layers of components (prop-drilling), any button in the app can simply dispatch a custom event:
```javascript
window.dispatchEvent(new Event('open-enquiry'))
```
The `EnquirySidebar` listens for this event globally and slides open gracefully.

---
*Designed & Developed for Sere Innovations.*
