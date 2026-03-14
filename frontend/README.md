# Food Ordering App - Frontend

A modern, responsive food ordering application built with React and Vite, featuring a beautiful UI with cart management, user authentication, and seamless ordering experience.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   ```
   
   Update `.env` with your backend API URL:
   ```
   VITE_API_URL=http://localhost:4000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Architecture

### Project Structure

```
src/
├── components/           # Reusable UI Components
│   ├── CartNotification/ # Cart bottom notification
│   ├── FoodDisplay/      # Food items grid display
│   ├── FoodItem/         # Individual food item card
│   ├── Footer/           # Application footer
│   ├── LoginPopup/       # Authentication modal
│   └── Navbar/           # Navigation header
├── context/              # React Context for state management
│   └── StoreContext.jsx  # Global cart and auth state
├── pages/                # Page components
│   ├── Cart/             # Shopping cart page
│   ├── Home/             # Main landing page
│   ├── MyOrders/         # User order history
│   ├── PlaceOrder/       # Order checkout page
│   └── Verify/           # Email verification page
├── assets/               # Static assets
│   └── icons/            # Application icons
├── App.jsx               # Main application component
└── main.jsx              # Application entry point
```

### Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with CSS Modules
- **Icons**: React Icons (Font Awesome 6)
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **State Management**: React Context API

### Core Features Architecture

#### 1. **State Management**
- **StoreContext**: Centralized state for cart items, user authentication, and food data
- **Cart Management**: Add/remove items, calculate totals, persist cart state
- **User Authentication**: Token-based auth with localStorage persistence

#### 2. **Component Architecture**
- **Modular Components**: Each UI element is a reusable component
- **Props-Driven**: Components receive data through props for reusability
- **Conditional Rendering**: Dynamic UI based on user state and cart contents

#### 3. **Routing Structure**
```
/           → Home (Food browsing)
/cart       → Shopping cart
/order      → Checkout/Place order
/myorders   → Order history
/verify     → Email verification
```

#### 4. **Responsive Design**
- **Mobile-First**: CSS Grid and Flexbox for responsive layouts
- **Breakpoints**: Tablet (768px) and Mobile (480px)
- **Adaptive Components**: Components adjust layout based on screen size

### Data Flow

1. **Food Data**: Fetched from backend API on app load
2. **Cart Operations**: Real-time cart updates with optimistic UI
3. **Authentication**: JWT tokens stored in localStorage
4. **API Integration**: Axios interceptors for authenticated requests

### Key Components Details

#### CartNotification Component
- **Purpose**: Fixed bottom notification when cart has items
- **Features**: Item count, total price, animated appearance
- **Trigger**: Appears when `getTotalCartAmount() > 0`

#### FoodItem Component
- **Purpose**: Individual food item display with add/remove functionality
- **Features**: Image with object-fit, quantity controls, price display
- **Integration**: Connected to StoreContext for cart operations

#### StoreContext
- **Cart State**: `cartItems` object with item IDs as keys
- **Auth State**: `token` for user authentication
- **API State**: `food_list` for menu items
- **Methods**: `addToCart`, `removeFromCart`, `getTotalCartAmount`

## 🎨 UI/UX Features

- **Modern Design**: Clean, minimalist interface with gradient accents
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover effects, loading states, micro-interactions
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Toast Notifications**: Non-intrusive feedback for user actions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

- `VITE_API_URL` - Backend API endpoint
- `VITE_MODE` - Application mode (development/production)

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build and Deploy

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### Environment Configuration

Ensure your production environment has the correct `VITE_API_URL` pointing to your backend API.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

---

**Note**: Make sure the backend API is running and accessible before starting the frontend application.