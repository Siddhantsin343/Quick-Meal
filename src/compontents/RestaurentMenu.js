import { useEffect, useState } from "react";
import ShimmerCard from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const  RestaurentMenu = ()=> {

    const [resMenu , setresMenu] = useState(null)

    const {resID} = useParams

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API + resID)
        const json = await data.json()
        console.log(json);

        setresMenu(json)
        
    }

    if (resMenu === null) return <ShimmerCard/>;

    const {name, cuisines, costForTwoMessage} = resMenu?.data?.cards[2]?.card?.card?.info;
    const {itemCards}= resMenu?.cards[2].groupedCard.cardsGroupMap.REGULAR.cards[1].card.card

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(" ,")}</h2>
        <h2>{costForTwoMessage}</h2>
        <h3>Menu</h3>
        <ul>
            {
                itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name}</li>)
            }
        </ul>
    </div>
  )
}

export default RestaurentMenu;

