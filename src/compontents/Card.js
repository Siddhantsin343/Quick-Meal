import { IMG } from "../utils/constant";

const Card = (props)=>{
    const {reLis} = props
    const {name, cloudinaryImageId, cuisines, avgRating, sla} = reLis
    return(
        <div className="card">
            <div className="cardImg">
                <img src={IMG + cloudinaryImageId} alt="Card Image"/>
            </div>
            <h1>{name}</h1>
            <h2>{cuisines.join(" ,")}</h2>
            <h3>rating ⭐ {avgRating}</h3>
            <h3>deliver in {sla?.deliveryTime} min</h3>
        </div>
    )
}

export default Card;
