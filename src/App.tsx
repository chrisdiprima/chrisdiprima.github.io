import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
			<Header />
			<main className="max-w-3xl mx-auto p-6 flex-1 w-full">
				<About />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}

export default App;
