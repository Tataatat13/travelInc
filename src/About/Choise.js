function Choise ({listchoise}) {
    return (
         

    <div className='about_bigbox'>

        {listchoise.map((element => {
            const{id, choisetext, choiseimg} = element;
            return (
                    <div className='about_smallbox' key={id}>
                    <p className='about_choosetext'>{choisetext}</p>
                    <img className='about_chooseimg' src={choiseimg} alt='foto' width="350px"/>
                    </div>
            )
        }))}
    </div>
    )
}
export default Choise;