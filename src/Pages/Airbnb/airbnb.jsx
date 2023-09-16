import Airbnb from '../../components/Cards/CardsDetails/Airbnb'
import Slideshow from '../../components/Cards/CardsDetails/slideshow'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/index'

export default function CardDetails() {
    return (
  <>
  <Header showHeaderDiv={false} />
  <Slideshow />
  <Airbnb />
  <Footer/>
  </>
    )
  }