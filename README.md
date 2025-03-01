# 🛍️ LazyShop

A modern e-commerce React application for beauty products, personal care items, and fashion.

## Overview

LazyShop is a fully responsive e-commerce web application built with React and styled with Tailwind CSS. It features a clean, modern UI with smooth animations, product filtering by category, shopping cart functionality, and more.

## Features

- **Responsive Design**: Works seamlessly on all device sizes
- **Product Categories**: Filter products by category (All, Beauty, Personal Care, Clothing)
- **Shopping Cart**: Add, remove items, and view cart total
- **Animations**: Smooth fade-in and slide-in animations throughout the site
- **Local Storage**: Cart items persist between sessions
- **Interactive UI**: Hover effects, badges, and dynamic rating displays

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

## Project Structure

```
lazyshop/
├── public/
├── src/
│   ├── components/
│   │   ├── CategoryTabs.js      # Category filter buttons
│   │   ├── Features.js          # Features section
│   │   ├── Footer.js            # Site footer with contact info
│   │   ├── Hero.js              # Hero section with CTA
│   │   ├── Navbar.js            # Navigation bar with cart button
│   │   ├── Newsletter.js        # Newsletter subscription form
│   │   ├── ProductCard.js       # Individual product display
│   │   ├── ProductSection.js    # Products listing container
│   │   └── ShoppingCart.js      # Shopping cart side panel
│   ├── contexts/
│   │   └── ProductContext.js    # Global state management
│   ├── App.js                   # Main component structure
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles and animations
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json
└── README.md
```

## State Management

The application uses React Context API for state management:

- **Shopping Cart**: Add, remove items, calculate totals
- **Category Filtering**: Filter products by category
- **UI State**: Control cart visibility and other UI elements

## Core Functionality

### Shopping Cart Logic

The cart functionality includes:

- Adding items
- Removing items
- Updating quantities
- Calculating totals
- Persisting cart data in localStorage

## Responsive Design

The app is fully responsive with different layouts for:

- Mobile devices
- Tablets
- Desktop screens

## Styling and Animations

Custom animations include:

- Fade-in effects
- Slide-in transitions
- Hover scaling
- Product card transformations

## Future Improvements

- User authentication
- Payment gateway integration
- Product search functionality
- Product detail pages
- Wishlist feature
- Admin dashboard
- Order history
