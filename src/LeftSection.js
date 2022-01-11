import  { FaTwitter } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import {RiHashtag} from "react-icons/ri";
import {IoNotificationsOutline} from "react-icons/io5";
import {BiEnvelope} from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import {RiFileList2Line} from "react-icons/ri";
import {BsPerson} from "react-icons/bs";
import {CgMoreO} from "react-icons/cg";
import TwitterButton from './TwitterButton'
import Footer from './Footer' 

const LeftSection = () => {
    return (
        <div className = "left-section">
            <FaTwitter /> 
           <h3><RiHome7Fill className ="secondSvg" />  Home</h3>
           <RiHashtag  className ="secondSvg"   />
           <IoNotificationsOutline  className ="secondSvg"  />
           <BiEnvelope   className ="secondSvg"  />
           <BsBookmark  className ="secondSvg"  />
           < RiFileList2Line className ="secondSvg"  />
           <BsPerson className ="secondSvg" />
           <CgMoreO className ="secondSvg"  />
           <TwitterButton />
           <Footer/>
        </div>
    )
}

export default LeftSection
