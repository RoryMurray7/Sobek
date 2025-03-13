import { Link } from "react-router"

function Footer() {
    return ( 
        <footer className="tiny center">
            <div>
                <p>© Sobek 2025</p>
            </div>
            <div className = "linksContainer">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-service">Terms of Service</Link>
            </div>
        </footer>
    )
}

export default Footer