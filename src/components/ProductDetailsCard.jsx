import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import { useCart } from '../contexts/CartProvider';
import Heart from './icons/Heart';
import HeartSolid from './icons/HeartSolid';
import ShoppingCart from './icons/ShoppingCart';
const ProductDetailsCard = ({ product }) => {
	const {
		product_title,
		product_image,
		specifications,
		description,
		price,
		rating,
		availability,
	} = product;
	const { setCartItems, wishList, setWishList } = useCart();
	const [isDisabled, setIsDisabled] = useState(false);
	const handleAddToCart = () => {
		setCartItems((prev) => [...prev, product]);
		toast.success('Product added to cart');
	};
	const handleAddToWishList = () => {
		setWishList((prev) => [...prev, product]);
		setIsDisabled(true);
		toast.success('Added to wishlist');
	};
	return (
		<div className="-mt-52 max-w-5xl w-11/12 mx-auto bg-white p-4 rounded-xl">
			{/* flex flex-col md:flex-row items-center justify-between gap-6 */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="max-w-[400px] mx-auto">
					<img src={product_image} alt="" />
				</div>
				<div className="space-y-2 mr-6">
					<h3 className="text-2xl font-bold">{product_title}</h3>
					<p className="text-lg font-medium">$ {price}</p>
					<p
						className={`badge badge-lg  border ${
							availability
								? 'bg-lime-100/80 border-lime-400'
								: 'bg-red-100 border-red-400'
						}`}
					>
						{availability ? 'In Stock' : 'Out of Stock'}
					</p>
					<p className="text-gray-500">{description}</p>
					<p>
						<h4 className="font-bold text-lg">Specification:</h4>
						<ul className="pl-5 list-disc text-gray-500">
							{specifications?.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</p>
					<p className="font-bold text-lg">Rating ⭐</p>
					<div className="flex items-center gap-4">
						<ReactStars
							count={5}
							value={rating}
							isHalf={true}
							edit={false}
							size={24}
							activeColor="#ffd700"
						/>
						<span className="text-gray-500">{rating}</span>
					</div>
					<div className="flex items-center gap-2">
						<button
							className="btn rounded-full bg-purple-500 text-white hover:text-black"
							disabled={!availability}
							onClick={handleAddToCart}
						>
							Add to cart <ShoppingCart />
						</button>
						<button
							className={`p-2 border rounded-full ${
								isDisabled ? 'cursor-not-allowed' : ''
							}`}
							disabled={isDisabled}
							onClick={handleAddToWishList}
						>
							{isDisabled ? <HeartSolid /> : <Heart />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsCard;
