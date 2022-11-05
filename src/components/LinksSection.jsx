import { LinkData } from "./LinkData"

const LinkSection = ()=> {
    return(
        <div className="link-section">
            {
                LinkData.map((item, index) => {
                    return (
                        <a 
                            href={item.path} 
                            className="links-btn" 
                            id={item.id} 
                            title={item.title}
                            target={item.target}>
                            {item.name}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default LinkSection