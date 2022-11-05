import zuriImg from '../assets/zuri.png'
import Img2 from  '../assets/I4G.png'

const Footer = ()=> {
    return(
        <footer className="footer">
            <div className="zuri-img">
                <img src={zuriImg} alt="" />
            </div>
            <p>HNG Internship 9 Frontend Task</p>
            <div className="i4g">
                <img src={Img2} alt="" />
            </div>
        </footer>
    )
}

export default Footer