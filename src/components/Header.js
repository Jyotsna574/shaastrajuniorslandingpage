import React from 'react'


function Header() {
    return (
        <header>
            <nav className="nav">
                <div className='img'>
                <img src="./logo1.png" width="100px"  />
                </div>
                <ul className="nav-items">
                    <li><a>HOME</a></li>
                    <li><a>COMPETITIONS</a></li>
                    <li><a>WORKSHOPS</a></li>
                    <li><a>CHAMPIONSHIP</a></li>
                    <li><a><button className='signup'>SIGN UP</button></a></li>
                </ul>
            </nav>
        </header>
    )
 }
 export default Header;
 