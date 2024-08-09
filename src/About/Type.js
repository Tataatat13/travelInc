function Type ({listtype}) {
    return ( <div className='head_typetour'>

        {listtype.map((element => {
            const{id, type, touricon, tourimg} =element;
            return (
                    <div className='box_typetour' key={id}>
                                            <p className="check_box">{type}</p>
                                    <div className='box_imgicon'>
                                            <img className='typeoftour_icon' src={touricon} alt='icon'width="50px"/>
                                            <img className='typeoftour_img' src={tourimg} alt='foto' width="250px"/>
                                    </div>
                    </div>
            )
        }))}
</div>
    )
}
export default Type;