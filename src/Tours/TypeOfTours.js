function TypeOfTours ({listTours}){
return(<div className="bigbox_tours">
{listTours.map((element => {
    const {id, name,country,description, price, image} = element;
    return (<div className="tours_card" key={id}>
        <div className="card_toursimg">
                
            <div className="card_tourstext">
                    <h2 className="toursname">{name}</h2>
                            
                    <h3 className="tourscountry">{country}</h3>
                
                    <p className="toursdescription">{description}</p>
                
                <div className="price_btn">            
                    <p className="toursprice">{price}</p>
                    <button className="tours_btn">Book Now</button>
                </div>
                
            </div>
            <img  className="tourimage" src={image} alt="foto" width="330px" height="440px"/>
                
        </div>
    </div>
    )
}))}
</div>

)
}
export default TypeOfTours;