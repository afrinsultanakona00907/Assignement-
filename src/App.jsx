// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

const App = () => {
	return (
		<div className="bg-stone-100 pt-4">
			<header className="rounded-xl max-w-7xl mx-auto text-white bg-purple-500 py-4 mb-80">
				<Navbar />
				<Banner />
			</header>
			<main className="max-w-6xl w-11/12 mx-auto">
				<h2 className="text-3xl font-bold text-center mb-6">
					Explore Cutting Edge Gadget
				</h2>
				<Shop />
			</main>
			<Footer />
		</div>
	);
};

export default App;

