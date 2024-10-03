import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const products = [
  { id: 1, name: 'Camiseta deportiva', price: 29.99, image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Pantalones de yoga', price: 39.99, image: 'https://images.unsplash.com/photo-1548663512-4a8a3d9d9b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Zapatillas de running', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Botella de agua', price: 14.99, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
]

const Dashboard = ({ addToCart }) => {
  const location = useLocation()
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (location.state?.paymentSuccess) {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 5000) // Hide message after 5 seconds
    }
  }, [location])

  return (
    <div className="container mx-auto px-4 py-8">
      {showMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">¡Gracias por su pago! </strong>
          <span className="block sm:inline">Su compra ha sido procesada con éxito.</span>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard