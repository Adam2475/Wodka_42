import Header from '../header'
import Footer from '../footer'
import Card from '../cards/card.js'
import Banner from '../banners/banner.js'
 
export default function Layout({ children }) {
  return (
    <container>
      <Header />
      {/* <Banner/> */}
      <main>{children}</main>
      <Footer />
    </container>
  )
}