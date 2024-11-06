import { toast } from 'react-toastify';
import { useCart } from '../contexts/CartProvider';
import Trash from './icons/Trash';
const CartProductCard = ({ product }) => {
	const { product_id, product_title, price, description, product_image } =
		product;
	const { cartItems, setCartItems } = useCart();
	const handleRemoveProduct = (id) => {
		const newProducts = cartItems.filter(
			(cartItem) => cartItem.product_id !== id
		);
		setCartItems(newProducts);
		toast.success('Removed from cart ❌');
	};
	return (
		<div className="bg-white flex items-center gap-4 p-4 border rounded-xl">
			<img
				src={product_image}
				alt=""
				className="size-40 rounded-xl object-cover"
			/>
			<div className="flex flex-1 justify-between items-center">
				<div className="space-y-2">
					<h2 className="font-bold text-xl">{product_title}</h2>
					<p className="text-gray-500">{description}</p>
					<p className="text-gray-500">$ {price}</p>
				</div>
				<button
					className="text-red-500"
					onClick={() => handleRemoveProduct(product_id)}
				>
					<Trash />
				</button>
			</div>
		</div>
	);
};

export default CartProductCard;
