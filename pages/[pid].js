import fs from 'fs/promises';
import path from 'path';

function ProductDetails(props) {
const { loadedProduct } = props;
// console.log(loadedProduct);
if(!loadedProduct) {
	return <p>Loading...</p>
}
	return (
		<>
		<h2>{loadedProduct.title}</h2>
		<p>{loadedProduct.description}</p>
		</>
		)
}

async function getData() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData)
	console.log(data);

	return data;
}
export async function getStaticProps(context) {
	const { params } = context;
	const productId = params.pid;

	const data = await getData();
	
	// filter for specific product id
	const product = data.products.find(product => product.id === productId)

	if (!product) {
		return {notFound: true};
	}

	return {
		props: {
			loadedProduct: product
		}
	}
}

export async function getStaticPaths() {
	const data = await getData();
	const ids = data.products.map(product => product.id);
	const pathsWithParams = ids.map(id => ({params: {pid: id}}));

	return {
		paths: pathsWithParams,
		fallback: true,
	}

}
export default ProductDetails;