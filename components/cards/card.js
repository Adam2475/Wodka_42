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