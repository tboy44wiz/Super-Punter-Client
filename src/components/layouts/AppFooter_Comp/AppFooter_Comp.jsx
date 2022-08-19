import {Link} from "react-router-dom";
import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
// import { RiFacebookCircleLine } from 'react-icons/ri';

//  Import _AppLayout_HOC scss.
import './_AppFooter_Comp.scss';


const AppFooterComp = () => {

    const year = new Date().getFullYear();

    return (
        <section className="AppFooterComp">
        
            {/* ==== Top Footer ==== */}
            <div class="top-footer__wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            {/* <h3 class="brand__name">SuperPunters</h3> */}
                            <Link to="/" className="nav-link">
                                <div className="brand_logo"></div>
                            </Link>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt adipisci 
                                incidunt quae! Quo ducimus dolorum saepe modi, exercitationem minima enim porro nisi.
                            </p>
                        </div>

                        <div class="col-md-4 mt-sm-4 mt-md-0">
                            <h3>Contacts</h3>
                            <p>Flat 5, Close 15, His Grace Pavilion Estate, Apo-Wumba, Abuja FCT</p>
                            <p>
                                <span> +234 8XX XXX XXX</span>,
                            </p>
                            <p> Email: <Link to="#">info@superpunters.com</Link></p>
                            <p>WhatsApp: +234 8XX XXX XXX</p>
                            <p>Instagram: @superpunters</p>
                        </div>

                        <div class="col-md-4 mt-sm-4 mt-md-0 d-flex flex-column align-items-center justify-content-start">
                            <div class="row">
                                <h3>Links</h3>
                                <div class="col">
                                    <p><Link to="/">Home</Link></p>
                                    <p><Link to="#">About</Link></p>
                                    <p><Link to="#">Features</Link></p>
                                    <p><Link to="#">Get Started</Link></p>
                                    <p><Link to="#">Testimonials</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==== Bottom Footer ==== */}
            <div class="bottom-footer__wrapper">
                <div class="container">
                    <div class="row">

                        <div class="col-md-5">
                            <div class="footer-copyright">
                                &copy; Copyright &nbsp;
                                <Link to="https://superpunters.com">SuperPunters</Link> { year }
                            </div>
                        </div>

                        <div class="col-md-7 text-end">
                            <div class="social-icon__wrapper">
                                <Link to="#">
                                    <SiInstagram color="white" />
                                </Link>
                                <Link to="#">
                                    <SiWhatsapp color="white" />
                                </Link>
                                <Link to="#">
                                    <FiTwitter color="white" />
                                </Link>
                                <Link to="#">
                                    <FiFacebook color="white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppFooterComp;
