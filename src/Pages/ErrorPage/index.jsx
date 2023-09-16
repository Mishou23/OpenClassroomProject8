import ErrorPage from '../../components/Error/error'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/footer'

import './index.css'
export default Error= () => {
    return (
     <>
        <Header showHeaderDiv={false} />
        <ErrorPage />
        <Footer />
        </>
    );
  };