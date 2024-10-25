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
        "/9.png",
        "/9.png",
        "/9.png",
        "/9.png",
        "/9.png",
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
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
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
        "/2.png",
        "/2.png",
        "/2.png",
        "/2.png",
        "/2.png",
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
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
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
        "/18s.png",
        "/18s.png",
        "/18s.png",
        "/18s.png",
        "/18s.png",
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
        "/20.png",
        "/20.png",
        "/20.png",
        "/20.png",
        "/20.png",
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
        "/11.png",
        "/11.png",
        "/11.png",
        "/11.png",
        "/11.png",
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
        "/15.png",
        "/15.png",
        "/15.png",
        "/15.png",
        "/15.png",
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
        "/17.png",
        "/17.png",
        "/17.png",
        "/17.png",
        "/17.png",
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
        "/16.png",
        "/16.png",
        "/16.png",
        "/16.png",
        "/16.png",
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
        "/3.png",
        "/3.png",
        "/3.png",
        "/3.png",
        "/3.png",
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
        "/19.png",
        "/19.png",
        "/19.png",
        "/19.png",
        "/19.png",
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
      id: 13,
      title: "Womens Denim Jacket",
      imageUrls: [
        "/img1.png",
        "/img1.png",
        "/img1.png",
        "/img1.png",
        "/img1.png",
      ],
      price: 700,
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
      id: 14,
      title: 'Womens Denim Jacket - Variant',
      imageUrls: [
        "/img5.png",
        "/img5.png",
        "/img5.png",
        "/img5.png",
        "/img5.png",
      ],
      price: 700,
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
      id: 15,
      title: 'Womens Denim Jacket - Variant',
      imageUrls: [
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
      ],
      price: 700,
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
      id: 16,
      title: 'Womens Denim Jacket - Variant',
      imageUrls: [
        "/img4.png",
        "/img4.png",
        "/img4.png",
        "/img4.png",
        "/img4.png",
      ],
      price: 700,
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
      id: 17,
      title: 'Womens Denim Jacket',
      imageUrls: [
        "/img2.png",
        "/img2.png",
        "/img2.png",
        "/img2.png",
        "/img2.png",
      ],
      price: 700,
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
      id: 18,
      title: 'Womens Denim Jacket',
      imageUrls: [
        "/img6.png",
        "/img6.png",
        "/img6.png",
        "/img6.png",
        "/img6.png",
      ],
      price: 700,
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
      id: 19,
      title: 'Womens Denim Jacket',
      imageUrls: [
        "/img3.png",
        "/img3.png",
        "/img3.png",
        "/img3.png",
        "/img3.png",
      ],
      price: 700,
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
      id: 20,
      title: 'Womens Denim Jacket',
      imageUrls: [
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
        "/7.png",
      ],
      price: 700,
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
