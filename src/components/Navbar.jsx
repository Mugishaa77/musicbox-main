export function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-white" id="mainNav">
        <div className="container px-4 px-lg-5">
            <button className="navbar-toggler navbar-toggler-left navbar-toggler-b`````g-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><a className="nav-link text-black" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link text-black" href="#services">Get  Started</a></li>
                    <li className="nav-item"><a className="nav-link text-black" href="#contact">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>    
        
        
    )

}