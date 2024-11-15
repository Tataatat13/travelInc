import './Contacts.css';


function ContactForm() {
    return (
        <div className='form-container'>
            <h2>Send a message to us!</h2>
            <form>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
                <input placeholder='Subject'/>
                <textarea placeholder='Message' rows="4"></textarea>
                <button>Send message</button>
            </form>
        </div>

    )
}
export default ContactForm;