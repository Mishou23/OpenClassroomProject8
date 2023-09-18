import Airbnb from '../../components/Cards/CardsDetails/Airbnb/Airbnb'
import Slideshow from '../../components/Cards/CardsDetails/Airbnb/slideshow'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/index'
import Dropdown from '../../components/Cards/CardsDetails/Dropdown/index'
import './style.scss'

export default function CardDetails() {
    return (
  <>
  <Header showHeaderDiv={false} />
  <Slideshow />
  <Airbnb />
  <Dropdown />
  <Footer/>
  </>
    )
  }