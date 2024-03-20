import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){

    

    const[readMore, setReadMore] = useState(false);
    
    const decription = readMore  ? info : `${info.substring(0,200)}.....`;

    function readmoreHandler(){
        setReadMore(!readMore);
    }
    return(
        <div className="card">

            <img src={image} className="image" alt="images"></img>

            <div className="tour-info">
                <div className="tours-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="decription"> 
                    {decription}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>

            <button className="button-red" onClick={ () => { removeTour(id)}}>
                Not interested
            </button>
        </div>
    )

}

export default Card;