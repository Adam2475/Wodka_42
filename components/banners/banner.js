import Layout from '../layout'
import Image from 'next/image';
 
export default function Page() {
  return (
	<>
    <div class="banner">
        <Image
			src = "/banner.jpeg"
		    width = {200}
		    height = {100}
		    alt = "picture"
            class = "banner-image"
		/>
        <div class="banner-desc">
            <a>why are you seing this ad?</a>
        </div>
    </div>
    </>
  )
}