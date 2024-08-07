import gsap from 'gsap';
import './About.css';
import { useLayoutEffect } from 'react';

function About (){

    useLayoutEffect (()=> {
        gsap.fromTo(".about_choose", { opacity:0, y: 100,}, {duration: 3, opacity: 1, y: 0});
        gsap.fromTo(".about_smallbox", { opacity:0, y: -100,}, {duration: 3, opacity: 1, y: 0});
    },[]);

    return (
        <div className="about_headbox">
            
                <div className='about_header'>
            <img className="about_image" src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt='foto'/>
            <h2 className='about_choose'>Why Choose us?</h2>
                </div>

                <div className='about_bigbox'>

                    <div className='about_smallbox'>
                    <p className='about_choosetext'>Easy Booking</p>
                    <img className='about_chooseimg' src='https://plus.unsplash.com/premium_photo-1663076518116-0f0637626edf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='foto' width="350px"/>
                    </div>

                    <div className='about_smallbox'>
                    <p className='about_choosetext'>Awesome Places</p>
                    <img className='about_chooseimg' src='https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='foto' width="300px"/>
                    </div>

                    <div className='about_smallbox'>
                    <p className='about_choosetext'>Value for money</p>
                    <img className='about_chooseimg' src='https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='foto' width="300px"/>
                    </div>

                    <div className='about_smallbox'>
                    <p className='about_choosetext'>Diverse Destination</p>
                    <img className='about_chooseimg' src='https://plus.unsplash.com/premium_photo-1661304658033-31774515dd9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='foto' width="300px"/>
                    </div>

                </div>

                <div className='about_type'>
                    
                    <div className='type_tour'>

                        <div className='header_typeoftour'>
                        <h3 className="smallbox_weather">Diverse Tour Type</h3>
                        </div>

                        <div className='head_typetour'>
                                
                                <div className='box_typetour'>
                                    <p className="check_box">Hiking</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=9844&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://www.travelandleisure.com/thmb/kqU3c9B99YyhUUyDhHS811gkpS0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-woman-hiking-USHIKESDGOG1023-d46db6f8e63d42be84a0e7c3ff1e69b4.jpg'alt='foto' width="200px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">Camp Tent</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=10558&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://malaysiacamping.com/wp-content/uploads/2023/12/Top-camping-Sites-Malaysia-1024x683.jpg'alt='foto' width="200px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">Adventures Tour</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=9317&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://pointship.net/wp-content/uploads/2022/11/futaleufu-civer-chile.png'alt='foto' width="200px"/>
                                    </div>
                                </div>
                        </div>

                        <div className='head_typetour'>
                                <div className='box_typetour'>
                                    <p className="check_box">Island Tour</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=lDgpZp3CBhr8&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://wallpapers.com/images/high/tasmania-beautiful-sunny-beach-5ezcdnokoq2r4z0d.webp'alt='foto' width="220px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">City Tour</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=111425&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900'alt='foto' width="200px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">Cruise</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=10699&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://www.marineinsight.com/wp-content/uploads/2019/08/Cruise-ships-1.png.webp'alt='foto' width="200px"/>
                                    </div>
                                </div>
                                
                        </div>

                        <div className='head_typetour'>
                                <div className='box_typetour'>
                                    <p className="check_box">Air Ride Tour</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=mBmBsY40xSEe&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://www.explore.com/img/gallery/heres-why-a-hot-air-balloon-ride-in-cappadocia-should-be-on-your-bucket-list/intro-1673969469.webp'alt='foto' width="210px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">Walking</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=9807&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://wunwun.com/wp-content/uploads/2023/11/AdobeStock_115106877-scaled-1-2048x1366.jpeg'alt='foto' width="180px"/>
                                    </div>
                                </div>

                                <div className='box_typetour'>
                                    <p className="check_box">Safari</p>
                                    <div className='box_imgicon'>
                                    <img className='typeoftour_icon' src='https://img.icons8.com/?size=100&id=24484&format=png&color=000000' alt='icon'width="50px"/>
                                <img className='typeoftour_img' src='https://www.tourradar.com/days-to-come/wp-content/uploads/2024/01/RS16222_shutterstock_212602420-1536x1024.jpg'alt='foto' width="200px"/>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
        
            <div className='bottom_typeoftour'>
            <p className='bottom_about'>Discover the world in a new way</p>
            </div>

    </div>
    )
}
export default About;