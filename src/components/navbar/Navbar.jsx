import "./navbar.scss"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [open, setOpen] = useState(false)
    const user = true;

    return (
        <nav>
            <div className='left'>
                <a href="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>Stayly</span>
                </a>
                <a href="/about">Home</a>
                <a href="/contact">About</a>
                <a href="/contact">Contact</a>
                <a href="/contact">Review</a>
            </div>
            <div className='right'>
                {user ? (
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/16972913/pexels-photo-16972913/free-photo-of-close-up-of-a-little-cute-dog.jpeg"
                            alt=""
                        />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) : (
                    <>
                        <a href="/">Sign in</a>
                        <a href="/" className='register'>Sign up</a>
                    </>
                )
                }
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/about">Home</a>
                    <a href="/contact">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/contact">Review</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div >
        </nav >
    )
}

export default Navbar;