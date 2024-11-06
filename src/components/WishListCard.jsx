import { toast } from 'react-toastify';
import { useCart } from '../contexts/CartProvider';
import ShoppingCart from './icons/ShoppingCart';
import Trash from './icons/Trash';
const WishListCard = ({ product }) => {
	const { product_id, product_title, price, description, product_image } =
		product;
	const { wishList, setWishList, setCartItems } = useCart();
	const handleRemoveProduct = (id) => {
		const newProducts = wishList.filter((item) => item.product_id !== id);
		setWishList(newProducts);
		toast.success('Removed from wishlist ❌');
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
					<p className="font-medium">$ {price}</p>
					<button
						className="btn btn-sm rounded-full bg-purple-500 text-white hover:text-black"
						onClick={() => {
							setCartItems((prev) => [...prev, product]);
							toast.success('Added to cart');
						}}
					>
						Add to cart <ShoppingCart />
					</button>
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

export default WishListCard;
