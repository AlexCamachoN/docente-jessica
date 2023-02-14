import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div>
            {/* <button>ddd</button> */}
            <div>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/home'>Perfil</NavLink>
                        </li>
                        
                                      
                    </ul>    
            </div>
        </div>
    </nav>
  )
}

export default Nav