import worldMap from './assets/worldMap.png'
import './index.css'

function Overview() {
  return (
    <div className='overviewContainer'>
      <div className="overviewText">
        <h1>A new generation of Global Military Intelligence</h1>
      </div>
      <div className="overviewImage">
        <img src={worldMap} alt="World Map" />
      </div>
    </div>
  )
}

export default Overview
