import { ProductData } from "../App";

type ProductProps = {
	productData: ProductData;
};

const Product = ({ productData }: ProductProps) => {
	const getImageSrc = () => {
		if (window.innerWidth < 768) {
			return productData.image.mobile;
		} else if (window.innerWidth < 1024) {
			return productData.image.tablet;
		} else {
			return productData.image.desktop;
		}
	};

	return (
		<article className="product-container">
			<header>
				<img
					src={`/assets/images/${getImageSrc()}`}
					alt={`Image depincting a ${productData.name}`}
				/>
			</header>

			<span className="product-category">{productData.type}</span>
			<h2 className="product-name">{productData.name}</h2>
			<p className="product-price">{productData.price.toFixed(2)}</p>
		</article>
	);
};

export default Product;
