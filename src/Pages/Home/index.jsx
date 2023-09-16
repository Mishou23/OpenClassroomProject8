import Header from '../../components/Header/index';
import Cards from '../../components/Cards/index';
import Footer from '../../components/Footer/footer'
import Footer from '../../components/Cards/footer'
import './index.css';

export default function Home() {
  return (
    <>
      <Header showHeaderText={true} showHeaderDiv={true} hideOverlay={true} />
      <Cards />
      <Footer/>
    </>
  );
}







