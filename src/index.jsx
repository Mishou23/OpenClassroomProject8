import Header from './components/Header/index';
import Cards from './components/Cards/index';
import Footer from './components/Footer/footer'
import './index.scss';

export default function Home() {
  return (
    <>
     <div className='container'>
     <Header showHeaderText={true} showHeaderDiv={true} hideOverlay={true} />
      <Cards />
     </div>
      <Footer/>
    </>
  );
}








