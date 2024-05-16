import Layout from '../layout'
import Image from 'next/image';
 
export default function Page() {
  return (
	<div class="card">
			<div class="image">
				<Image
					src = "/KrootArt1.png"
					width = {500}
					height = {500}
					alt = "picture"
				/>
			</div>
			<div class="card-content">
				<h3> Adam </h3>
				<p class="description"> brief description </p>
				<p class="tag"> 42 Firenze </p>
				<div class="icons">
					<i class="fas fa-cat"></i>
					<i class="far fa-clock"></i>
					<i class="fas fa-dragon"></i>
					<i class="fas fa-user"></i>
				</div>
			<div class="bottom">
				<p>hello from the bottom</p>
			</div>
		</div>
	</div>
  )
}

//pagine statiche //getStaticPaths 
//pagine server //getserversideprops

/*  header
    footer
    content->character_page

    fai una query per ogni personaggio e caricaci i
    dati all interno
    runtime page generation
*/


// // const Character = {(characters)} => {(
//    console.log ("character", character)
//     <div>
//      
//      </div>
// )}

// graphql vs api rest

// id
// name
// species
// location

// export async function getSErverSideProps