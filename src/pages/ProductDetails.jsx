import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProductDetailsCard from '../components/ProductDetailsCard';

const ProductDetails = () => {
	const data = useLoaderData();
	const { productId } = useParams();
	const productData = data.products.find(
		(product) => product.product_id === productId
	);
	return (
		<div className="bg-stone-100">
			<Navbar />
			<div className="bg-purple-500 pt-6 pb-60">
				<div className="w-11/12 mx-auto">
					<h2 className="font-bold text-2xl text-center text-white mb-4">
						Product Details
					</h2>
					<p className="text-gray-200 text-center text-balance">
						Explore the latest gadgets that will take your experience to the
						next level. From smart devices to the coolest accessories, we have
						it all!
					</p>
				</div>
			</div>
			<ProductDetailsCard product={productData} />
			<div className="pt-16">
				<Footer />
			</div>
		</div>
	);
};

export default ProductDetails;
