import './style.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo-menu-container">
                <img src="/logo.svg" alt="logo" className="logo" />
                <ul className="menu">
                    <li className="menu-item">Explore</li>
                    <li className="menu-item">Company</li>
                    <li className="menu-item">Support</li>
                </ul>
            </div>
            <div className="logo-menu-container-2">
                <p className="menu-item">Become a member</p>
                <button className="login-button">Sign in</button>
            </div>
            <img src='/menu-3.svg' alt='menu' className='menu-bar' />
        </nav>
    )
}

export default NavBar