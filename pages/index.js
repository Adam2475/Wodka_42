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
	const characterCount = repo
	console.log("character number", characterCount);
	return (
	<>
	{/* banner */}
		<div id="lista-personaggi">
		{/* <a href="products.js"><Card class="product"/></a> */}

			{/* <p>{repo.characters.results.name}</p> */}


		</div>
	</>
	);
}

//const episodedata = await fetchGraphql

//le static props devono essere
//rebuildate per cambiare valore
// a divverenza delle server side props