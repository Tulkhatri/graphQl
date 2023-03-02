import React from 'react'
import logo from './assets/logo.png'
function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className='container'>
                <div className='navbar-brand'>
                    <div className='d-flex'>
                        <img src={logo} alt='logo' style={{ width: "40px", height: "40px" }}></img>
                        <div>Project Management</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header