# 🪷 BishtAipanArt — Traditional Kumaoni Aipan Art E-Commerce

> *"Har Rekha Mein Pahad Ki Aashish" — Every line carries the blessings of the mountains.*

**BishtAipanArt** is a premium e-commerce web application dedicated to preserving and promoting **Kumaoni Aipan** — a sacred ritual folk art from the Kumaon region of Uttarakhand, India. Built with modern web technologies, the platform connects global audiences with authentic handcrafted Aipan artwork while empowering rural women artisans.

<p align="center">
  <img src="https://images.unsplash.com/photo-1605792657661-596af7809f3a?w=800" alt="Aipan Art" width="600" style="border-radius: 8px;" />
</p>

---

## ✨ Features

### 🛍️ E-Commerce
- **Product Catalog** — Browse handcrafted Aipan products across categories: Wall Art, Pooja Collection, Home Decor, Accessories & Jewellery
- **Product Filtering & Search** — Filter by category, price range, search by name/artisan/motif
- **Shopping Cart** — Persistent cart with localStorage, quantity management, subtotal/shipping calculation
- **Wishlist** — Save favorite items for later
- **Checkout** — Streamlined order placement flow

### 🎨 Custom Orders
- **4-Step Custom Order Wizard** — Choose artwork type, size, occasion, color preferences, budget
- **Multi-step form with validation** — Animated transitions between steps
- **Telegram & Email notifications** — Admin receives instant alerts for new orders

### 📖 Heritage & Education
- **Aipan Heritage Page** — Learn about the sacred art form and its GI Tag recognition
- **Craftsmanship Page** — Detailed 6-step process of Aipan creation
- **Interactive Motif Cards** — Hover to discover the meaning behind sacred symbols
- **Blog Section** — Stories about art, culture, and artisan empowerment

### 👥 User Experience
- **SEO Optimized** — Dynamic meta tags for every page
- **Responsive Design** — Mobile-first, fully responsive across all devices
- **Aipan-themed UI** — Traditional Geru-red & rice-white color palette, mandala animations, geometric borders
- **Smooth Animations** — Framer Motion transitions, scroll-triggered reveals
- **Lazy Loading** — Code-splitting with React Suspense for optimal performance
- **Skeleton Loaders** — Aipan-themed loading states

### 🔧 Admin & Notifications
- **Telegram Bot Integration** — Real-time notifications for orders, contacts & custom requests
- **EmailJS Integration** — Contact form email delivery
- **Dashboard** — User account management

---

## 🚀 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Routing** | React Router v6 |
| **State Management** | Zustand |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Forms** | React Hook Form, Zod |
| **Email** | EmailJS |
| **Notifications** | Telegram Bot API |
| **SEO** | Custom SEO component |
| **Linting** | ESLint |

---

## 📁 Project Structure

```
bisht-aipan-art/
├── public/
├── src/
│   ├── components/
│   │   ├── aipan/              # Aipan-themed visual components
│   │   │   ├── AipanBorder.jsx
│   │   │   ├── AipanDivider.jsx
│   │   │   ├── AipanLoader.jsx
│   │   │   ├── AipanMandala.jsx
│   │   │   └── AipanMotif.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Newsletter.jsx
│   │   ├── ProductCard.jsx
│   │   └── SEO.jsx
│   ├── context/
│   │   ├── authStore.js        # Zustand auth store
│   │   ├── cartStore.js        # Zustand cart store (persisted)
│   │   └── wishlistStore.js    # Zustand wishlist store
│   ├── data/
│   │   └── products.json       # Product catalog data
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero, categories, artisans
│   │   ├── Shop.jsx            # Product listing with filters
│   │   ├── ProductDetail.jsx   # Individual product view
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── Checkout.jsx        # Order checkout
│   │   ├── Wishlist.jsx        # Saved items
│   │   ├── About.jsx           # Company story & values
│   │   ├── Craftsmanship.jsx   # Aipan creation process
│   │   ├── Heritage.jsx        # Aipan art history & GI tag
│   │   ├── CustomAipanOrder.jsx# Multi-step custom order form
│   │   ├── Blog.jsx            # Articles & stories
│   │   ├── Contact.jsx         # Contact form with email & Telegram
│   │   ├── FAQ.jsx             # Frequently asked questions
│   │   ├── Login.jsx           # User login
│   │   ├── Register.jsx        # User registration
│   │   ├── Dashboard.jsx       # User account dashboard
│   │   ├── OrderTracking.jsx   # Order status tracking
│   │   ├── Policies.jsx        # Shipping, returns, privacy policies
│   │   └── NotFound.jsx        # 404 page
│   ├── services/
│   │   ├── apiService.js       # API service layer (mock backend)
│   │   └── telegramService.js  # Telegram notification service
│   ├── App.jsx                 # Root component with routes
│   ├── index.css               # Tailwind + global Aipan styles
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── tailwind.config.js          # Custom Aipan color palette & animations
├── vite.config.js              # Vite build configuration
└── postcss.config.js
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Geru Red** | `#A83B2C` | Primary brand color, accents, CTAs |
| **Deep Geru** | `#7A2418` | Hover states, dark backgrounds |
| **Rice White** | `#FBFBF8` | Backgrounds, clean areas |
| **Warm Sand** | `#F5E6D3` | Section backgrounds, image placeholders |
| **Charcoal** | `#292522` | Text, dark footer |
| **Muted Gold** | `#C59A52` | Accents, decorative elements |
| **Soft Cream** | `#FFF9F0` | Alternating sections |

### Typography
- **Headings:** Cormorant Garamond (serif) — Elegant, traditional feel
- **Body:** Poppins (sans-serif) — Modern, clean readability
- **Decorative:** Tiro Devanagari Hindi (serif) — Hindi/Devanagari text

### Key Animations
- `mandala-spin` — 60s continuous rotation of sacred geometry
- `fade-in` / `slide-up` — Page entry animations
- `gentle-pulse` — Subtle pulsing for CTAs
- `line-draw` — SVG stroke animation for decorative elements
- `float` — Gentle floating motion for hero elements

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bisht-aipan-art.git
cd bisht-aipan-art

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Telegram Bot (optional — for admin notifications)
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id

# EmailJS (optional — for contact form emails)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Site URL
VITE_SITE_URL=https://bishtaipanart.com
```

> **Note:** The application works fully without environment variables. Telegram and EmailJS features gracefully degrade with console logging when not configured.

---

## 📄 Pages Overview

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero with animated mandala, featured products, category grid, artisan profiles, testimonials, newsletter |
| `/shop` | **Shop** | Product grid with category/price filters, search, sort, grid/list toggle |
| `/shop/:category` | **Shop (Filtered)** | Pre-filtered product view by category |
| `/product/:slug` | **Product Detail** | Full product info, artisan details, motif meaning, related items |
| `/cart` | **Cart** | Cart items, quantity management, subtotal/shipping/total |
| `/checkout` | **Checkout** | Order form with shipping info and payment |
| `/wishlist` | **Wishlist** | Saved/favorited products |
| `/about` | **About Us** | Brand story, values, mission |
| `/craftsmanship` | **Craftsmanship** | 6-step Aipan creation process |
| `/aipan-heritage` | **Heritage** | Aipan history, significance, GI Tag |
| `/custom-aipan` | **Custom Order** | 4-step custom order wizard |
| `/blog` | **Blog** | Articles about art & culture |
| `/contact` | **Contact** | Contact form with subject selection |
| `/faq` | **FAQ** | Accordion-style frequently asked questions |
| `/policies/:type` | **Policies** | Shipping, returns, privacy policies |
| `/login` | **Login** | User authentication |
| `/register` | **Register** | New user registration |
| `/dashboard` | **Dashboard** | User account & order history |
| `/order-tracking` | **Order Tracking** | Track order status |
| `*` | **404** | Custom not-found page |

---

## 🧩 Key Features Explained

### 🪷 Aipan-Themed Components
The project includes reusable Aipan-themed visual components:
- **AipanMandala** — SVG-based animated sacred geometry
- **AipanBorder** — Decorative borders (dots, geometric, traditional variants)
- **AipanDivider** — Section dividers with traditional patterns
- **AipanMotif** — Interactive motif cards with hover-reveal meanings
- **AipanLoader** — Aipan-themed loading spinner with mandala rings

### 🛒 Cart System
- Persistent cart using `localStorage` under key `bisht_cart`
- Zustand store with computed values (`subtotal`, `shipping`, `total`)
- Free shipping on orders above ₹1,000
- Real-time badge counter in header

### 📬 Notification System
- **Telegram Bot** — Instant admin notifications for orders, contacts, and custom requests
- Graceful degradation — Works without configuration; logs to console
- Formatted messages with emoji-rich Markdown

### 🎨 Custom Order Wizard
- 4-step multi-form with animated transitions
- Step 1: Choose artwork type
- Step 2: Select size, occasion, color preference
- Step 3: Budget, description, contact details
- Step 4: Review & submit

---

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🤝 Contributing

We welcome contributions! To get started:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Aipan Artisans of Kumaon** — For preserving this sacred tradition
- **Uttarakhand GI Registry** — For recognizing Aipan as a protected heritage art
- **Unsplash** — For product imagery
- **Lucide** — For beautiful open-source icons

---

<p align="center">
  <strong>Crafted with ❤️ in Kumaon, Uttarakhand</strong><br />
  <em>हर रेखा में पहाड़ की आशीष</em>
</p>
