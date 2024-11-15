


function TypeOfTours ({listTours}){


return(<div className="tripcard">

{listTours.map((element => {
    const {id, name,country,description, image} = element;

    return (<div className="t-card" key={id}>
                    <div className="t-img">
                    <img src={image} alt="foto"/>      
                    </div>
                    <h2>{name} ({country})</h2>
                    <p>{description}</p>
                
            </div>
    )
}))}
    </div>

)
}
export default TypeOfTours;