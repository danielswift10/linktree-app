import blackStar from '../../assets/black-star.svg'
import checkIcon from '../../assets/check-bx1.svg'
import checkIcon1 from '../../assets/check-bx.svg'

import './SuccessPage.css'
const SuccessPage = () => {
    return ( 
        <div className="login__success">
            <img src={blackStar} alt="" className="icon-1"/>
            <img src={blackStar} alt="" className="icon-2"/>
            <img src={blackStar} alt="" className="icon-3"/>
            <img src={blackStar} alt="" className="icon-4"/>
            <img src={blackStar} alt="" className="icon-5"/>
            <img src={blackStar} alt="" className="icon-6"/>
            
            <div className="check-icon">
                <img src={checkIcon} alt="" />
            </div>
            <h1>MESSAGE SENT!</h1>
            <div className="login-message">
                <span>
                    <img src={checkIcon1} alt="" />
                </span> Your message has been sent! We'll get back to you shortly...
            </div>
            <a href="/contact" className="close">
                <input type="button" value="BACK TO HOME" className="close-btn"/>
            </a>
        </div>
     );
}
 
export default SuccessPage;