# 💍 Vowora — India's Premier Wedding Planning & Vendor Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Parity: WedMeGood](https://img.shields.io/badge/Model-WedMeGood%20Chennai-e72e76.svg)](https://www.wedmegood.com/vendors/chennai/wedding-planners/)
[![Platform](https://img.shields.io/badge/Platform-Web%20SPA-blue.svg)]()

> **Vowora** is a wedding planning and vendor discovery platform modeled directly after **WedMeGood (Chennai Wedding Planners)**. Built with luxury aesthetics, high performance, and complete feature parity.

---

## ✨ Feature Highlights & WedMeGood Parity

### 1. 🔍 Comprehensive Vendor Directory & Multi-faceted Filters
- **Locality Filters**: Real Chennai sub-localities (ECR, T. Nagar, Anna Nagar, Adyar, Mylapore, Nungambakkam, Velachery, OMR, Alwarpet, Guindy).
- **Budget / Planning Fee Tiers**:
  - Under ₹2.5 Lakh
  - ₹2.5 Lakh - ₹4 Lakh
  - ₹4 Lakh - ₹6 Lakh
  - Above ₹6 Lakh (Luxury & Destination)
- **Customer Rating Filter**: 4.8+ Top Rated, 4.5+ Highly Rated, 4.0+ Recommended.
- **Services Offered**: Full Planning, Partial Planning, Decor & Floral Styling, Destination Weddings, Hospitality & Logistics, Day-of Coordination.
- **Dynamic Live Search**: Real-time matching across vendor names, specialties, and localities.
- **Sorting Options**: Popularity (Vowora Score), Rating (High to Low), Price (Low to High / High to Low), Most Reviewed.
- **View Modes**: Interactive Grid View (3 cols) and List View (1 col).

### 2. 🎴 WedMeGood Signature Vendor Cards
- **High-Definition Multi-Photo Slider**: Interactive photo pagination with slide counter (`1/6 photos`).
- **Trust Badges**: Handpicked, Verified, Top Rated 2026.
- **Price Transparency**: Clear starting planning fee and decor fee breakdown.
- **Direct Action CTAs**:
  - `Contact`: Reveals verified phone number, address, and opens direct WhatsApp chat.
  - `Send Enquiry`: Opens the instant lead capture quote request modal.
  - `Shortlist (Heart)`: Saves planner to persistent shortlist with confetti celebration.
  - `Card Click`: Opens the rich, full-screen Vendor Profile.

### 3. 🏛️ Rich Vendor Detail Profile View
- **Multi-Photo Hero Gallery**: Curated album view.
- **Navigation Tabs**:
  - **Overview & Bio**: Years of experience, weddings count, specialty, and services.
  - **Pricing & Packages**: Detailed Silver, Gold, and Royal Destination package breakdowns with deliverables.
  - **Portfolio & Albums**: High-resolution wedding stills.
  - **Verified Reviews**: Couple reviews with ratings, wedding dates, and venue mentions.
  - **FAQs Accordion**: Advance payment policy, decor ownership, and logistics coverage.
- **Sticky Lead Capture Box**: Right-hand inquiry form with wedding date, guest count, and WhatsApp verification.

### 4. 🧮 WedMeGood Planning Tools
- **Interactive Wedding Budget Calculator**:
  - Custom total budget input and dynamic slider (₹5 Lakhs to ₹1.5 Crores).
  - Categorical percentage breakdown (Venue & Catering 40%, Decor 20%, Photography 12%, Planner 8%, Attire 12%, Entertainment 8%).
  - Real-time proportional color bar chart.
- **12-Month Master Wedding Checklist**:
  - Pre-populated countdown timeline (10-12 Months Out, 6-9 Months Out, 3-5 Months Out, 1 Month Out, Wedding Week).
  - Interactive checkboxes with progress percentage and confetti celebrations.
  - Add custom tasks on the fly.

### 5. 💼 "List Your Business" Vendor Registration Flow
- Multi-step onboarding form for wedding planners and vendors to list their business on Vowora.
- Submitted vendors are instantly validated and live in the directory with custom packages!

### 6. ❤️ User Dashboard Drawers
- **Shortlisted Planners Drawer**: Fast access to all bookmarked planners with direct booking buttons.
- **My Enquiries Drawer**: Real-time status tracking for all sent quote requests.

---

## 🚀 Quick Start (Running Locally)

The application has zero build step hurdles and runs out of the box using any web server.

### Option A: Using Python (Recommended)
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Using Node
```bash
npx serve -l 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Architecture

```
leohit/
├── index.html            # Main HTML5 Single Page Application shell
├── css/
│   └── style.css         # Luxury wedding styling, animations, badges
├── js/
│   ├── app.js            # Reactive application logic, filter engine, modals, tools
│   └── data/
│       └── vendors.js    # 10+ Chennai wedding planners, categories, cities, checklist
├── package.json          # Project metadata & npm scripts
└── README.md             # Documentation & setup guide
```

---

## 🎨 Brand Design System
- **Primary Rose / Crimson**: `#E72E76`, `#FF5277`
- **Champagne Gold**: `#D4AF37`, `#AA820A`
- **Typography**: Playfair Display (Headers), Plus Jakarta Sans (UI Body)
- **Responsiveness**: Mobile-first, tablet optimized, desktop widescreen layout

---

## 📄 License
MIT License. Built for **Vowora Weddings & Celebrations**.
