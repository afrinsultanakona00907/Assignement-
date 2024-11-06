import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch('/categories.json')
			.then((res) => res.json())
			.then((data) => setCategories(data.categories))
			.catch((error) => console.log(error));
	});
	return (
		<aside className="w-full sm:w-[200px]">
			<ul className="space-y-4 bg-white rounded-xl border p-4 shadow-xl">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`btn hover:bg-none ${
								isActive ? 'bg-purple-500' : ''
							} w-full rounded-full font-medium`
						}
					>
						All Products
					</NavLink>
				</li>
				{categories?.map((category) => (
					<li key={category.id}>
						<NavLink
							to={`/products/${category.slug}`}
							className={({ isActive }) =>
								`btn ${
									isActive ? 'bg-purple-500' : ''
								} w-full rounded-full font-medium`
							}
						>
							{category.category}
						</NavLink>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
