import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContenxt';
import Nav from '../components/Nav';

const Cart = () => {
  const { cartItem } = useCart();

  const price = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
        <Nav/>
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 mt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <header className="flex justify-between flex-col items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-700">Your Shopping Cart</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Back to Home
          </Link>
        </header>

        {cartItem.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">🛒 Your cart is empty</p>
            <Link
              to="/"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center bg-white p-4 rounded-xl shadow-sm  hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-contain rounded-lg"
                  />
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">
                      Total: <span className="font-bold text-green-600">${(item.quantity * item.price*1500).toLocaleString(2)}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary box */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2 text-gray-600">
                <span>Items ({cartItem.length})</span>
                <span>${(price*1500).toLocaleString(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>Delivery Fee</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>${(price*1500).toLocaleString(2)}</span>
              </div>
              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full shadow hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default Cart;
