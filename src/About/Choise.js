import { choisedata } from './choisedata';

function Choise () {
    
    const choise = choisedata ;

    return (
    

    <div className='about_bigbox'>

        {choise.map((element => {
            const{id, choisetext, choiseimg} = element;
            
            return (
            
                    
                    <div className='about_smallbox' key={id}>
                    <p>{choisetext}</p>
                        <div className='about-img'>
                    <img src={choiseimg} alt='foto'/>
                        </div>
                    </div>
            
            )
        }))}
    </div>
    )
}
export default Choise;