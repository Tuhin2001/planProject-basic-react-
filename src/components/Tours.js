import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div className="container">
            {/* heading */}
            <div>
                <h2 className="title"> Plan with Travel.io </h2>
            </div>
            {/* Card section */}

            <div className="cards">
                {
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        
        </div>
    )
}
export default Tours;