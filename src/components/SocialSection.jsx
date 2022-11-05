import slackImg from '../assets/slack.svg'
import githubImg from '../assets/github.svg'


const SocialSection = ()=>{
    return(
        <div className="social">
            <div className="slack">
                <img src={slackImg} alt="" />
            </div>
            <div className="github">
                <img src={githubImg} alt="" />
            </div>
        </div>
    )
}

export default SocialSection