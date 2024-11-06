import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
	const { product_id, product_title, product_image, price } = product;
	const navigate = useNavigate();
	return (
		<div className="w-full p-4 drop-shadow-md bg-white rounded-xl space-y-2">
			<div className="h-40 rounded-xl">
				<img
					src={product_image}
					alt=""
					className="w-full h-full object-scale-down"
				/>
			</div>
			<h4 className="text-xl font-bold">{product_title}</h4>
			<p className="text-gray-500">${price}</p>
			<button
				className="btn btn-outline"
				onClick={() => navigate(`/product-details/${product_id}`)}
			>
				View Details
			</button>
		</div>
	);
};

export default ProductCard;
