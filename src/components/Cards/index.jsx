import "./index.css"
import Data from '../../logements'
export default function Cards() {
    return (
      <div className="card-container">
      {Data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.cover} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
    )
  }