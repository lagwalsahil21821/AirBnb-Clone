export default function Card(props){
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText = "Online"
    }
    return(
        <div className = "card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src = {`../images/${props.item.coverImg}`} alt = "some character" className = "card-img"></img>
            <div className = "rating">
                <img src = "../images/star.png" alt = "star rating" className = "card-star"></img>
                <span className = "card-rating"> {props.item.stats.rating} </span>
                <span className = "total-rating">({props.item.stats.reviewCount}) • </span>
                <span className = "location">{props.item.location}</span>
            </div>
            <p className = "card-title">{props.item.title}</p>
            <p className = "card-price"><b>From ${props.item.price}</b> / person</p>
        </div>
    )
}