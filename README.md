# Paradise Nursery

A modern and responsive plant sales website built with React and Vite. 

## Project Overview

Paradise Nursery is a single-page application that allows users to browse and purchase houseplants online. The application features a beautiful landing page, a product listing page with categorized plants, and a fully functional shopping cart.

## Features

### Landing Page
- Beautiful background image
- Company introduction
- Clear call-to-action button

### Product Listing Page
- 6+ houseplants organized into 3 categories (Tropical, Succulent, Vine)
- Each plant displays: thumbnail image, name, price, and "Add to Cart" button
- Responsive grid layout
- Category-based organization

### Shopping Cart Page
- Dynamic display of cart items
- Quantity adjustment (increase/decrease)
- Item deletion functionality
- Real-time total price calculation
- Total items count
- Continue shopping and checkout buttons

### Navigation & Cart
- Header with navigation links
- Shopping cart icon with real-time item count
- Smooth page transitions

## Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling and responsive design

## Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+ recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd paradise-nursery
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation and cart header
│   │   ├── LandingPage.jsx    # Home page with background image
│   │   ├── ProductListingPage.jsx  # Plant catalog with categories
│   │   └── ShoppingCartPage.jsx    # Shopping cart functionality
│   ├── App.jsx                # Main application component with routing
│   ├── App.css                # Global styles
│   ├── index.css              # Base styles
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
└── vite.config.js             # Vite configuration
```

## Usage

1. **Browse Plants**: Navigate to the "Shop" page to view all available plants organized by category.
2. **Add to Cart**: Click the "Add to Cart" button on any plant to add it to your shopping cart.
3. **View Cart**: Click the cart icon in the header to see your cart items.
4. **Adjust Quantity**: Use the + and - buttons to change the quantity of any item in your cart.
5. **Remove Items**: Click the delete button to remove an item from your cart.
6. **Checkout**: When ready, click the "Checkout" button to proceed with your purchase.

## Responsive Design

The application is fully responsive and works on all device sizes:
- Desktop: Multi-column grid layout
- Tablet: Adjusted grid layout
- Mobile: Single column layout with stacked elements

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
