import ProductDetailPage from './components/pages/ProductDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Loginpage from './components/pages/Loginpage'
import Shop from './components/pages/Shop'

const App = () => {
  const products = [
    {
      id: 1,
      title: "Leather Jacket",
      imageUrls: [
        "/src/assets/9.png",
        "/src/assets/9.png",
        "/src/assets/9.png",
        "/src/assets/9.png",
        "/src/assets/9.png",
      ],
      price: 199.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.5,
      reviewsCount: 46,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 2,
      title: "Denim Jeans",
      imageUrls: [
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
      ],
      price: 79.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 3,
      title: "Classic Watch",
      imageUrls: [
        "/src/assets/2.png",
        "/src/assets/2.png",
        "/src/assets/2.png",
        "/src/assets/2.png",
        "/src/assets/2.png",
      ],
      price: 149.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.8,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 4,
      title: "Womens Denim Jacket (Blue)",
      imageUrls: [
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
        "/src/assets/7.png",
      ],
      price: 99.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 5,
      reviewsCount: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'

      ],
    },
    {
      id: 5,
      title: "Summer Wind T-shirt",
      imageUrls: [
        "/src/assets/18s.png",
        "/src/assets/18s.png",
        "/src/assets/18s.png",
        "/src/assets/18s.png",
        "/src/assets/18s.png",
      ],
      price: 31.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.2,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 6,
      title: "Tailored Jacket",
      imageUrls: [
        "/src/assets/20.png",
        "/src/assets/20.png",
        "/src/assets/20.png",
        "/src/assets/20.png",
        "/src/assets/20.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 7,
      title: "Formal Classic Suit",
      imageUrls: [
        "/src/assets/11.png",
        "/src/assets/11.png",
        "/src/assets/11.png",
        "/src/assets/11.png",
        "/src/assets/11.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 8,
      title: "White Solid Formal T-shirt",
      imageUrls: [
        "/src/assets/15.png",
        "/src/assets/15.png",
        "/src/assets/15.png",
        "/src/assets/15.png",
        "/src/assets/15.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 9,
      title: "Tailored Jacket",
      imageUrls: [
        "/src/assets/17.png",
        "/src/assets/17.png",
        "/src/assets/17.png",
        "/src/assets/17.png",
        "/src/assets/17.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 10,
      title: "Solid White Summer T-shirt",
      imageUrls: [
        "/src/assets/16.png",
        "/src/assets/16.png",
        "/src/assets/16.png",
        "/src/assets/16.png",
        "/src/assets/16.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 11,
      title: "Classic Top",
      imageUrls: [
        "/src/assets/3.png",
        "/src/assets/3.png",
        "/src/assets/3.png",
        "/src/assets/3.png",
        "/src/assets/3.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
      ],
    },
    {
      id: 12,
      title: "Formal Jeans",
      imageUrls: [
        "/src/assets/19.png",
        "/src/assets/19.png",
        "/src/assets/19.png",
        "/src/assets/19.png",
        "/src/assets/19.png",
      ],
      price: 38.99,
      originalPrice: 1000,
      discount: '30% off',
      rating: 4.4,
      reviewsCount: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['blue', 'red', 'gray'],
      offers: [
        'Special offer get 25% off',
        'Bank offer get 30% off on Axis Bank Credit card',
        'Wallet offer get 40% cashback via Paytm wallet on first transaction',
        'Special offer get 25% off'
        
      ],
    },
  ];
  return (
    <Router>
      <Routes>
        {/* Product Detail Route */}
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/loginpage" element={<Loginpage />}/>
        <Route path="/shoppage" element={<Shop />}/>
        <Route path="/product/:id" element={<ProductDetailPage products={products} />} />

      </Routes>
    </Router>
  );
}

export default App;
