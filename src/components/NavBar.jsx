import logo from '../assets/logoM.png'
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0">
        <img className='mx-2 w-24' src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/m-mughni-69b15830b/" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/ugni_mh/" className=" hover:text-white">
          <FaInstagramSquare />
        </a>
        <a href="" className=" hover:text-white"><FaWhatsappSquare /></a>
        <a href="" className=" hover:text-white"><FaTwitter /></a>
      </div>
    </nav>
  )
}

export default NavBar