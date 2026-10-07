# 🛡️ SMOZI STORE — High-Converting Trust Building Architecture

A production-ready, ultra-optimized **Shopify Online Store 2.0 Theme** rebuilt for **Smozi Store** with modern styling, conversion-optimized design, and an end-to-end **Trust Building Architecture**.

[![Shopify OS 2.0](https://img.shields.io/badge/Shopify-Online%20Store%202.0-95BF47.svg?logo=shopify)](https://shopify.dev/docs/themes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Trust Architecture](https://img.shields.io/badge/Trust%20Architecture-Enabled-10b981.svg)]()

---

## 🌟 Key Rebuilt Features & Trust Architecture

### 1. 🚚 Dynamic Trust & Reassurance Ticker (`sections/smozi-trust-ticker.liquid`)
- Seamless infinite-scroll marquee ticker showcasing core value propositions:
  - *Free Worldwide Tracked & Insured Express Delivery*
  - *⭐️ 4.9/5 Rating from 12,450+ Verified Customers*
  - *🛡️ 30-Day Money Back Guarantee — 100% Risk-Free*
  - *🔒 256-Bit Bank-Grade SSL Secure Checkout*
  - *⚡ 99.8% On-Time Delivery Guarantee*
- Fully customizable background, text, and accent colors in the Theme Editor.

### 2. 🛡️ Modular Trust Badges Grid (`sections/smozi-trust-badges.liquid`)
- 4-column responsive grid highlighting the pillars that erase buyer hesitation:
  - **Free Express Shipping** with tracking guarantee
  - **30-Day Risk-Free Trial** with money-back guarantee
  - **Bank-Grade SSL Security** (256-bit encryption)
  - **24/7 Dedicated Support** with rapid response promise
- Drag-and-drop blocks in Shopify Theme Customizer with customizable icons, titles, and copy.

### 3. ⭐ Verified Customer Reviews & Scorecard (`sections/smozi-reviews.liquid`)
- Comprehensive review scorecard displaying average rating (4.9/5), star breakdown bars (92% 5-star rating), and total buyer count.
- Authentic customer testimonial cards featuring verified buyer badges, timestamps, star ratings, and review headlines.

### 4. ❓ Objection-Eliminating FAQ Accordion (`sections/smozi-faq.liquid`)
- Interactive, responsive accordion handling top buyer questions:
  - Shipping timelines & tracking links
  - 30-Day risk-free returns & refund procedure
  - Payment safety and supported gateways
  - Customer care contact channels

### 5. 🛒 Sticky Add-to-Cart (ATC) with Trust Seal (`sections/smozi-sticky-atc.liquid`)
- Floating slide-up bar activated when shoppers scroll past the main buy button.
- Displays product thumbnail, real-time variant price, discount comparison, money-back guarantee seal, and an instant checkout button.

### 6. ⚡ Product Page Trust Box (`snippets/smozi-product-trust.liquid`)
- Placed directly beneath the Add to Cart / Buy Now buttons:
  - **Live Shopper Counter**: Real-time natural visitor counter with pulsing status light.
  - **Stock Urgency Badge**: High-demand indicator encouraging immediate purchase.
  - **Dynamic Delivery Estimator**: Automatically calculates 2–4 business day delivery window based on the customer's current local date.
  - **30-Day Money-Back Guarantee Seal**: Visual guarantee shield.
  - **Accepted Payment Gateway Badges**: Visa, Mastercard, AMEX, Apple Pay, Google Pay, PayPal, Shop Pay, and Cash on Delivery (COD).

### 7. 🔔 Live Social Proof Sales Toast (`snippets/smozi-sales-popup.liquid`)
- Subtle floating recent-order notifications in the bottom corner with verified buyer checkmark.
- Easily toggleable on/off via Theme Customizer settings.

### 8. 🔍 Google Rich Snippets SEO Schema (`snippets/smozi-seo-trust-schema.liquid`)
- Built-in Schema.org JSON-LD microdata for `Organization`, `WebSite`, `Product`, `AggregateRating`, `Offer`, and `MerchantReturnPolicy`.
- Powers Google search results with 5-star rating badges and rich snippets to establish immediate search engine trust.

---

## 🎨 Design System & Styling Tokens (`assets/smozi-trust.css`)

| Token | Value | Purpose |
| :--- | :--- | :--- |
| `--smozi-trust-emerald` | `#10b981` | Verification checkmarks, trust badges |
| `--smozi-trust-slate-900` | `#0f172a` | High-contrast headers, CTA elements |
| `--smozi-trust-amber` | `#f59e0b` | 5-Star review ratings |
| `--smozi-trust-indigo` | `#4f46e5` | Interactive accents & hover states |
| Glassmorphism & Shadows | Tailored | Floating sticky ATC & sales toasts |

---

## 🚀 How to Connect & Publish on Shopify

### Method 1: Shopify GitHub Integration (Recommended)
1. In your Shopify Admin, navigate to **Online Store > Themes**.
2. Under the **Theme library** section, click **Add theme > Connect from GitHub**.
3. Select your GitHub account and choose repository:
   ```
   https://github.com/devsmozi/smozi-store
   ```
4. Select the `main` branch. Shopify will automatically sync and build your theme!
5. Click **Actions > Publish** when ready to go live.

### Method 2: Shopify CLI
1. Open terminal in the `smozi-store` directory.
2. Run `shopify theme dev` to preview locally against your Shopify store:
   ```bash
   shopify theme dev --store your-store-subdomain.myshopify.com
   ```
3. Push directly to your store:
   ```bash
   shopify theme push
   ```

---

## 📁 Repository Structure

```
smozi-store/
├── assets/
│   ├── smozi-trust.css          # Core Trust Architecture stylesheet
│   ├── smozi-trust.js           # Live counters, sticky ATC, delivery calculator
│   └── ...                      # Shopify base assets & JS modules
├── config/
│   ├── settings_schema.json     # Customizer settings including Smozi Trust group
│   └── settings_data.json       # Preconfigured presets with Cart Drawer enabled
├── layout/
│   └── theme.liquid             # Master layout injecting trust styles & scripts
├── sections/
│   ├── smozi-trust-badges.liquid  # Modular 4-column trust pillars
│   ├── smozi-trust-ticker.liquid  # Marquee trust ticker
│   ├── smozi-reviews.liquid       # Testimonials & review scorecard
│   ├── smozi-faq.liquid           # Risk-reversal FAQ accordion
│   ├── smozi-sticky-atc.liquid    # Sticky ATC bar for product pages
│   └── ...                        # Base Shopify sections
├── snippets/
│   ├── smozi-product-trust.liquid # Product page trust, delivery & payment box
│   ├── smozi-sales-popup.liquid   # Floating recent sales proof toast
│   ├── smozi-seo-trust-schema.liquid # Google Rich Snippets JSON-LD schema
│   └── ...                        # Base Shopify snippets
└── templates/
    ├── index.json               # Rebuilt homepage template with trust sections
    ├── product.json             # Rebuilt product template with trust blocks
    └── ...                      # Collection, cart, search templates
```

---

## 🔒 License

Distributed under the [MIT License](LICENSE.md). Rebuilt and crafted for Smozi Store.
