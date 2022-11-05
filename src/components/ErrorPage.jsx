import arrowBtn from '../assets/arrow-icon.svg'
import { Link } from "react-router-dom";
import Footer from './Footer';
const ErrorPage = () => {
    return (  
        <div className="not-found">
            <h1>
                <span>404 error</span>
                <span>We can't find that page</span>
            </h1>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <div className="home-btn">
                <Link to='/' className='back'>
                    <span><img src={arrowBtn} alt="arrow" /></span>
                    <span>Go back</span>
                </Link>
                <Link to='/' className='home'>Take me home</Link>
            </div>
            <Footer/>
        </div>
    );
}
 

export default ErrorPage;