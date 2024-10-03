import { useState } from "react";
import Product from "./components/Product";
import Footer from "./components/Footer";

export type ProductData = {
	name: string;
	type: string;
	price: number;
	image: {
		desktop: string;
		mobile: string;
		tablet: string;
	};
};

const App = () => {
	const [product, setProduct] = useState<ProductData[]>([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	fetch("/data.json")
		.then((res) => res.json())
		.then((data) => setProduct(data))
		.catch((err) => console.error(`Error fetching product: ${err}`));

	return (
		<>
			<main>
				<h1>Desserts</h1>
				<ul>
					{product.map((product, idx) => (
						<Product productData={product} key={idx} />
					))}
				</ul>
			</main>
			<Footer />
		</>
	);
};

export default App;
