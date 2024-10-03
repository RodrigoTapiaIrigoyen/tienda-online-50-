import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Navbar from './components/Navbar'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cart, setCart] = useState([])

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => {
    setIsLoggedIn(false)
    setCart([]) // Clear the cart when logging out
  }

  const addToCart = useCallback((product) => {
    setCart(prevCart => [...prevCart, product])
  }, [])

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} cartItemCount={cart.length} />
        <Routes>
          <Route path="/" element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Welcome onLogin={handleLogin} />
          } />
          <Route path="/dashboard" element={
            isLoggedIn ? <Dashboard addToCart={addToCart} /> : <Navigate to="/" />
          } />
          <Route path="/cart" element={
            isLoggedIn ? <Cart cart={cart} removeFromCart={removeFromCart} /> : <Navigate to="/" />
          } />
          <Route path="/checkout" element={
            isLoggedIn ? <Checkout cart={cart} /> : <Navigate to="/" />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App