import './style.css';
import Header from '../Header/index'; 
import Imgsrc from '../../../images/landscape.png';

export default function Banner() {
  return (
    <div>
      <Header imgSrc={Imgsrc} showHeaderText={false} /> {/* Pass Imgsrc as a prop */}
    </div>
  );
}
