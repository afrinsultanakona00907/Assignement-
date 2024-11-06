import { useCart } from '../contexts/CartProvider';
import WishListCard from './WishListCard';

const WishListProducts = () => {
	const { wishList } = useCart();
	console.log(wishList.length);
	if (wishList.length === 0) {
		return (
			<div className="mt-12 h-80 bg-white flex items-center justify-center gap-4 p-4 border rounded-xl">
				<p className="text-gray-500 text-3xl">
					🔍 No items found in your wish list
				</p>
			</div>
		);
	}
	return (
		<div className="mt-6 space-y-2">
			{wishList.map((item) => (
				<WishListCard key={item.product_id} product={item} />
			))}
		</div>
	);
};

export default WishListProducts;
