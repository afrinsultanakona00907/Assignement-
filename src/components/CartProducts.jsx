import React from 'react';
import { useCart } from '../contexts/CartProvider';
import CartProductCard from './CartProductCard';

const CartProducts = () => {
	const { cartItems } = useCart();
	if (cartItems.length === 0) {
		return (
			<div className="mt-12 h-80 bg-white flex items-center justify-center gap-4 p-4 border rounded-xl">
				<p className="text-gray-500 text-3xl text-center">
					🔍 No items found in cart
				</p>
			</div>
		);
	}
	return (
		<div className="mt-6 space-y-2">
			{cartItems.map((cartItem) => (
				<CartProductCard key={cartItem.product_id} product={cartItem} />
			))}
		</div>
	);
};

export default CartProducts;
