import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartProvider';
import Heart from './icons/Heart';
import ShoppingCart from './icons/ShoppingCart';
const Navbar = () => {
	const { cartItems, wishList } = useCart();
	return (
		<nav className="sticky top-0 backdrop-blur-lg z-50">
			<div className="py-4 w-11/12 mx-auto flex items-center justify-between">
				<Link to="/" className="text-2xl font-bold">
					Gadget <span className="text-orange-300">Heaven</span>
				</Link>
				<ul className="flex items-center gap-7">
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/statistics">Statistic</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
				</ul>
				<div className="space-x-4">
					<button className="relative bg-white p-2 text-gray-500 rounded-full shadow-md hover:bg-gray-100">
						<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
							{cartItems.length}
						</span>
						<ShoppingCart />
					</button>
					<button className="relative bg-white p-2 text-gray-500 rounded-full shadow-md hover:bg-gray-100">
						<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
							{wishList.length}
						</span>
						<Heart />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
