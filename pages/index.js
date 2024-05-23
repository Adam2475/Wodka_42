import Image from "next/image"
import { Inter } from "next/font/google"
import Layout from "../components/layout/index.js"
const inter = Inter({ subsets: ["latin"] })
import Card from '/components/cards/card.js'

// const [count:Number, setCount] = useState(initialState: 0);
//console.log("count", count);


export const getServerSideProps = (async () => {
	// fetch data from external API
	const res = await fetch('https://rickandmortyapi.com/api/character/22');


	if (!res.ok)
	{
		throw new Error('Failed to fetch data');
	}
	// console.log("character", res[69]);
	const repo = await res.json();

	// const aquaRick = repo;
	// console.log("result", aquaRick);
	// console.log("hello woeld");
	// Pass data to the page via props
	return { props: { repo } }
})

export default function Home( { repo } ) {
	const characterCount = repo.name
	const imgSrc = repo.image
	console.log("character number", characterCount);
	return (
	<>
	{/* banner */}
		<div id="lista-personaggi">
		{/* <a href="products.js"><Card class="product"/></a> */}

			{/* <p>{repo.characters.results.name}</p> */}
			<div className="card">
			<div className="image">
				<Image
					src = {imgSrc}
					width = {500}
					height = {500}
					alt = "picture"
				/>
			</div>
			<div class="card-content">
				<h3> Adam </h3>
				<p className="description"> brief description </p>
				<p className="tag"> 42 Firenze </p>
				<div className="icons">
					<i className="fas fa-cat"></i>
					<i className="far fa-clock"></i>
					<i className="fas fa-dragon"></i>
					<i className="fas fa-user"></i>
				</div>
			<div className="bottom">
				<p>hello from the bottom</p>
			</div>
		</div>

	</div>

		</div>
	</>
	);
}

//const episodedata = await fetchGraphql

//le static props devono essere
//rebuildate per cambiare valore
// a divverenza delle server side props