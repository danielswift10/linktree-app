import Footer from "../Footer"
import { ContactData } from "../Contact/ContactData";

import './Contact.css'

const Contact = () => {
    const name = "DanielSwift"
    return ( 
        <div className="contact">
            <main className="main">
                <div className="contact-header">
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>
                <div className="form-container">
                        <form action="/success" className="form">
                            <div className="form-content">
                                {
                                    ContactData.map((item, index) => {
                                        return (
                                            <div className="grid">
                                                <div className="input-area">
                                                    <label>{item.label}</label>
                                                    <input id={item.id} type={item.type}  placeholder={item.placeholder}  required/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="email-area">
                                <label>Email</label>
                                <input type="email" id="email" placeholder="yourname@email.com" required />
                            </div>
                            <div className="message-area">
                                <label>Message</label>
                                <textarea id="message" rows='7' cols="10"
                                required
                                placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                            </div>
                            <label className="container">You agree to providing your data to {name} who may contact you.
                                <input type="checkbox" className="che" required/>
                                <span className="checkmark"></span>
                            </label>
                            <input type="submit" value="Send message" id="btn__submit" className="submit-btn"/>
                        </form>
                </div>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Contact; 