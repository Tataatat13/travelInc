import { useLayoutEffect, useState } from 'react';
import './Gallery.css'
import { imagedata } from './Imagedata';
import gsap from 'gsap';

function Gallery () {

    useLayoutEffect (()=> {
        gsap.fromTo(".headtext_gallery", { opacity:0, y: -100,}, {duration: 3, opacity: 1, y: 0});
    },[]);

    const [moment, setMoment]= useState(0);
    const {name, image} = imagedata[moment];

    const previosMoment = () => {
        setMoment((moment => {
            moment --;
            if (moment < 0) {
                return imagedata.length -1;
            }
            return moment;
        }))
    }

    const nextMoment = () => {
        setMoment ((moment => {
            moment ++; 
            if (moment > imagedata.length -1) {
                moment = 0;
            }
            return moment;
        }))
    }

    return (<div className='head_gallery'>
    <div className='headcontainer_gallery'>
                <h2 className='headtext_gallery'>Let's Discover The World Together</h2>

                <div className='leftbox_gallery'>
                    <div className='icons_gallery'>
                    <img src='https://img.icons8.com/?size=100&id=6cTPFsVvUcM9&format=png&color=000000' alt='icons' width="40px"/>
                    <img src='https://img.icons8.com/?size=100&id=6cTPFsVvUcM9&format=png&color=000000' alt='icons' width="40px"/>
                    <img src='https://img.icons8.com/?size=100&id=6cTPFsVvUcM9&format=png&color=000000' alt='icons' width="40px"/>
                    </div>
                    <h2 className='quotes_gallery'>{name}</h2>
                </div> 
                
            <div className='rightbox_gallery'>
                        <button className='btn_galerry' onClick={previosMoment}>
                        <img className='direction_gallery' src='https://img.icons8.com/?size=100&id=mGGG7e7uU3me&format=png&color=000000'
                        alt="icon"
                        width="50px"/>
                        </button>
                
                        <img className='moments_gallery' src={image} alt='foto'/>
                        
                        <button className='btn_galerry' onClick={nextMoment}>
                        <img src='https://img.icons8.com/?size=100&id=qluycuJkTfD5&format=png&color=000000'
                        alt="icon"
                        width="50px"/>
                        </button>
            </div>
    </div>
</div>


    )
}
export default Gallery;
