
export default function Conttent(item) {
    return(
        <div className="card">
            <img className="card-img" src={item.image} alt="Card picture" />
            <div className="card-detail">
                <img className='location-img' src="./images/location-icon.png" alt="location" />
                <span className="country">
                    {item.country}
                </span>
                <a className = " google-link" target="_blank" href={item.gmap}>View on Google Maps</a>
                <h1 className="place-name">{item.spotName}</h1>
                <p className="date-range" >{item.date}</p>
                <p className="description">{item.description}</p>
            </div>
        </div>
    )
}