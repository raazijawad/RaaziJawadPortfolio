import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="mb-20 flex py-6 items-center justify-between">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-10' src="" />
      </div>

      {/* Social Icons */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href="https://www.linkedin.com/in/raazijawad" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com/raazijawad" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a 
          href="https://twitter.com/raazijawad" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>

        <a 
          href="https://www.instagram.com/raazijawad" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
