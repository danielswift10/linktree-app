import profileImg from '../assets/avatar.jpg'
import shareBtn from '../assets/dots-horizontal.svg'
import shareBtnDt from '../assets/share-right.svg'
import cameraIcon from '../assets/camera.svg'

const ProfileSection = () => {
    return(
        <div className="profile">
            <div className="avatar" id='profile__img'>
                <img src={profileImg} alt="profile-imag" className='av'/>
                <img src={cameraIcon} alt="" className='camera-icon'/>
            </div>
            <h1>swift_fingers_</h1>
            <h2 className='slack-name' id='slack'>DanielSwift</h2>
            <div className="share-btn">
                <img src={shareBtn} alt="share-btn"  className='share-mb'/>
                <img src={shareBtnDt} alt="share-btn" className='share-dt' />
            </div>
        </div>
    )
}

export default ProfileSection