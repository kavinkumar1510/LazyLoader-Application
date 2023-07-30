import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar(){
    return(
       <>
       <nav className='navbar'>
           
           <ul className='nav-menu'>
           <li>
              <Link to = '/chairman' className='nav-links'>Chairman</Link>
           </li>
               <li>
              <Link to = '/' className='nav-links'>Secretary</Link>
           </li>
           <li>
              <Link to = '/principal' className='nav-links'>Principal</Link>
              </li>
           </ul>
       </nav>
       </>
    )
}

export default Navbar