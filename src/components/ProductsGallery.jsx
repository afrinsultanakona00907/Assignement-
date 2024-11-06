import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductsGallery = () => {
	const data = useLoaderData();
	const { category } = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		if (category) {
			const formattedCategory = category
				.replace(/-/g, ' ')
				.replace(/\b\w/g, (char) => char.toUpperCase());
			const filteredProducts = data.products.filter(
				(product) => product.category === formattedCategory
			);
			setProducts(filteredProducts);
		} else {
			setProducts(data.products);
		}
	}, [category]);
	return (
		<div className="flex-1">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard key={product.product_id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductsGallery;
