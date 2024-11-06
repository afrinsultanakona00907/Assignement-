import { useEffect, useState } from 'react';
import ProductsGallery from './ProductsGallery';
import Sidebar from './Sidebar';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('/fake-data.json')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setCategories(data.categories);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className="flex gap-4 pb-16">
			<Sidebar categories={categories} />
			<ProductsGallery products={products} />
		</div>
	);
};

export default Shop;
