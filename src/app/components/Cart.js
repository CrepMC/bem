import Navbar from './Navbar';
import Footer from './Footer';

const Cart = () => (
  <div>
    <Navbar />
    <main className='p-4'>
      <h1>Your Cart</h1>
      {/* Display cart items here */}
    </main>
    <Footer />
  </div>
);

export default Cart;