import Header from '../header'
import Footer from '../footer'
import Card from '../cards/card.js'
 
export default function Layout({ children }) {
  return (
    <container>
      <Header />
      <main>{children}</main>
      <Footer />
    </container>
  )
}