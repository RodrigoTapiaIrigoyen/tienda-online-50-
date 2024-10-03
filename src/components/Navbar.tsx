import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ShoppingCart, LogOut } from 'lucide-react'

const Navbar = ({ isLoggedIn, onLogout, cartItemCount }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <ShoppingBag className="mr-2" />
          <span className="font-bold text-xl">Be Breve</span>
        </Link>
        {isLoggedIn && (
          <div className="flex items-center">
            <Link to="/dashboard" className="mr-4 hover:text-blue-200">Productos</Link>
            <Link to="/cart" className="mr-4 hover:text-blue-200 flex items-center">
              <ShoppingCart className="mr-1" />
              <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItemCount}</span>
            </Link>
            <button onClick={onLogout} className="flex items-center hover:text-blue-200">
              <LogOut className="mr-1" />
              Salir
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar