import './Contacts.css';

function Contacts (){
    return (
<div className="headbox_contacts">
        <div className='textbox_contacts'>
            <img className='img_contacts' src='https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='foto'/>
            <h2 className='text_contacts'> Contact us</h2>
        </div>

    <div className='box_contacts'>
        <div className='smallbox_one_contacts'>
            <h3 className='headertext_contacts'>Contact Agency</h3>
            <p className='agency_contacts'>Our travel specialist partners will arrange an initial consultation by phone or exchange emails.Once you select an itinerary you like, book it with a travel specialist, who will then confirm all services and coordinate all logistics, including support throughout your trip.</p>
        </div>  
    
        <div className='smallbox_two_contacts'>
            <h3 className='headertext_contacts'>Our Contacts</h3>
                <ul className='grid'>
                    <li className="list_contacts">Adress:</li>
                    <li className="list_contacts">154 Willesden ln, London</li>
                    <li className="list_contacts">Phone:</li>
                    <li className="list_contacts">+44 (77) 1234 5678 </li>
                    <li className="list_contacts">Email:</li>
                    <li className="list_contacts">info@mainmail.com</li>
                </ul>
        </div>

        <div className='smallbox_three_contacts'>
            <h3 className='headertext_contacts'>Any Question?</h3>
                <form 
                action="https://formspree.io/f/xpznlwbb"
                method="POST">
                <input type="hidden" name="_language" value="en"/>
            <div>    
                    <label>
                    Your email:
                    <input type="email" className='input_contacts' name="_replayto" placeholder="Your email...." required=""/>
                    </label>
            </div>
            <div>
                    <label>
                    Your message:
                    <textarea  className='input_contacts' placeholder="Type your message..." required=""></textarea>
                    </label>
            </div>
            <div className='first_btn'>
            <button className='btn_contacts' type="submit">Send</button>
            </div>
                </form>
        </div>
    
    </div>
            
</div>
    )
}
export default Contacts;
