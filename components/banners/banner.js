import Layout from '../layout'
import Image from 'next/image';
 
export default function Page() {
  return (
	<>
    <div className="banner">
        <Image
			src = "/banner.jpeg"
		    width = {200}
		    height = {100}
		    alt = "picture"
          className = "banner-image"
		    />
        <div className="banner-desc">
            <a>why are you seing this ad?</a>
        </div>
    </div>
    </>
  )
}