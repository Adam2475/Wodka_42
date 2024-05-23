import Layout from '../layout'
import Image from 'next/image';
 
export default function Page() {
  return (
	<div className="card">
			<div className="image">
				<Image
					src = "/KrootArt1.png"
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
  )
}