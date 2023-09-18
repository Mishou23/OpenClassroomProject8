import Data from '../../../../logements';
import { useParams } from 'react-router-dom';
import './style.scss'
export default function Dropdown() {
  const { id } = useParams(); // Get the ID from the URL

  // Find the data object with the matching ID
  const selectedData = Data.find(item => item.id === id);

  return (
    <div className='Dropdowns'>
    <div className='Dropdown'>
       <div className='drop-des'>
       <div className='headline'>
       <h3>Description</h3>
       <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
       </div>
       </div>
       <div className='des-text'>
        <p>{selectedData.description}</p>
       </div>
    </div>
    <div className='Dropdown'>
       <div className='drop-equip'>
       <div className='headline'>
       <h3>Équipements</h3>
       <div className='chevron'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <style>{`svg { fill: #ffffff; }`}</style>
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          </div>
       </div>
       </div>
       <div className='equip-text'>
        <div className='equipList'> 
         {selectedData.equipments.map((equip, index) => (
                <div className="name" key={index}>
                  <div>{equip}</div>
                </div>
              ))}
              </div>
       </div>
    </div>
    </div>

  )}