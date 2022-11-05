import LinkSection from './LinksSection'
import ProfileSection from './ProfileSection'

import './Linktree.css'
import Footer from './Footer'
import SocialSection from './SocialSection'
const Linktree = () => {
    return(
        <div className="linktree">
            <header>
                <ProfileSection/>
            </header>
            <main>
                <LinkSection/>
                <SocialSection/>
            </main>
            <Footer/>
        </div>
        
    )
}

export  default Linktree