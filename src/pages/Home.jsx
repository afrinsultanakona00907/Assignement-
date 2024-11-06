import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
	return (
		<div className="bg-stone-100 pt-4">
			<header className="rounded-xl max-w-7xl mx-auto text-white bg-purple-500 py-4 mb-80">
				<Navbar />
				<Banner />
			</header>
			<main className="max-w-6xl w-11/12 mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Explore Cutting Edge Gadget
				</h2>
				<div className="flex flex-col sm:flex-row gap-4 pb-16">
					<Sidebar />
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
