import { useParams } from 'react-router-dom';
import Data from '../../../../logements';

export function getHousingData() {
  const { id } = useParams(); 

  const housing = Data.find((item) => item.id === id);
  
  return housing || null; 
}

