import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner.jpg';
const Banner = () => {
	return (
		<section className="mt-6 max-w-4xl mx-auto">
			<div className="space-y-6">
				<h1 className="text-5xl font-bold text-center">
					Upgrade Your Tech Accessorize with Gadget Heaven Accessorie
				</h1>
				<p className="text-center w-2/3 mx-auto text-slate-100">
					Explore the latest gadget that will take your experience to the next
					level. From the smart device to the coolests accessoriess, we have it all!
				</p>
				<div className="text-center">
					<Link to="/dashboard" className="btn">
						Dashboard
					</Link>
				</div>
			</div>
			<div className="-mb-60 mt-8 backdrop-blur-sm p-4 border border-white rounded-xl">
				<img
					src={BannerImage}
					alt=""
					className="w-full max-h-[400px] object-cover rounded-xl"
				/>
			</div>
		</section>
	);
};

export default Banner;
