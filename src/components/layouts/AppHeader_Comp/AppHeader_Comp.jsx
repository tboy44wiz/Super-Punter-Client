import { Link } from "react-router-dom";

//  Import _AppHeader_Comp scss.
import './_AppHeader_Comp.scss';

const AppHeaderComp = () => {
    return (
        <div className="AppHeaderComp">

            <nav className="navbar navbar-expand-lg navbar-dark nav__wrapper">
                <div className="container-fluid">

                    <Link to="/" className="nav-link">
                        <div className="brand_logo"></div>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Testimonial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default AppHeaderComp;
