import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';
import '../../../styles/globals.css';

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