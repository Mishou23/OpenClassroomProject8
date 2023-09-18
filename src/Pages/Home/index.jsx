import Header from '../../components/Header/index';
import Cards from '../../components/Cards/index';
import Footer from '../../components/Footer/footer'
import './index.scss';

export default function Home() {
  return (
    <>
      <Header showHeaderText={true} showHeaderDiv={true} hideOverlay={true} />
      <Cards />
      <Footer/>
    </>
  );
}








