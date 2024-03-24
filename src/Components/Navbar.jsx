import React from 'react'
import '../Styles/Navbar.css';
const Navbar = () => {
  return (
   <div>
   <header className="header">
        <div className="header-row container" role="navigation" aria-label="Main">
            <div className="header-left">
                <div className="logo">
                    <h2>Avataar</h2>
                </div>
            </div>
            <div className="header-right">
                <ul className="main-menu">
                    <li className="menu-item"><a href="#" >Home</a></li>

                    <li className="menu-item mega-menu">
                        <a href="#">Electronics</a>
                        
                        
                    </li>
                    <li className="menu-item"><a href="#">Books</a></li>
                    <li className="menu-item"><a href="#">Music</a></li>
                    <li className="menu-item dropdown">
                        <a href="#"> More</a>
                        <div className="sub-menu-wrapper slideInUp">
                            <ul className="sub-menu">
                                <li className="menu-item"><a href="#">Furniture</a></li>
                                <li className="menu-item"><a href="#">Travel </a></li>
                                <li className="menu-item"><a href="#">Botanical </a></li>
                                <li className="menu-item"><a href="#">Electronics</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="menu-item"><a href="#">Movies</a></li>
                    <li className="menu-item"><a href="#">Clothing</a></li>
                    <li className="menu-item"><a href="#">Games</a></li>

                </ul>
                <a href="#" id="hamburger-icon" class="mobile-toggler" aria-label="Mobile Menu"><i class="fas fa-bars"></i></a>
            </div>

            
            <div id="mobile-menu" className="mobile-menu hidden slideInDown">
                <ul>
                    <li className="menu-item"><a href="#" class="active">Home</a></li>


                    <li className="menu-item dropdown">
                        <a href="#">more</a>
                        <div className="sub-menu-wrapper">
                            <ul className="sub-menu">
                    <li className="menu-item mega-menu">
                        <a href="#">Electronics</a>
                        
                    </li>
                    <li className="menu-item"><a href="#">Books</a></li>
                    <li className="menu-item"><a href="#">Music</a></li>
                                <li className="menu-item"><a href="#">Movies1</a></li>
                                <li className="menu-item"><a href="#">Clothing</a></li>
                                <li className="menu-item"><a href="#">Games</a></li>
                                <li className="menu-item"><a href="#">Furniture</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>

   

</div>
  )
}
export default Navbar
