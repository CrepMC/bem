import Link from 'next/link';

const Navbar = () => (
  <nav className='flex justify-between items-center p-4'>
    <Link href='/' legacyBehavior>
      <a className='text-lg font-bold'>Fashion Shoes</a>
    </Link>
    <div className='flex space-x-4'>
      <Link href='/profile' legacyBehavior>
        <a>Profile</a>
      </Link>
      <Link href='/cart' legacyBehavior>
        <a>Cart</a>
      </Link>
    </div>
  </nav>
);

export default Navbar;