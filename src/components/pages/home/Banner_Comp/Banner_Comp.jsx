import React from 'react';

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";


/*=== Import the Banner_Comp SCSS ===*/
import './_Banner_Comp.scss';


const BannerComp = () => {
  return (
    <section className="BannerComp">
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-12 col-md-6 h-100 banner-title__wrapper">
                    <h1 className="banner__title">Experience your ultimate mobile application</h1>
                    <p className="banner__subTitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias quis repudiandae atque eos?
                    </p>

                    {/* Download Buttons */}
                    <div className="download-button__wrapper">
                        <button className="playstore__button">
                            <IoLogoGooglePlaystore />
                            <span>Google Play</span>
                        </button>
                        <button className="appstore__button">
                            <SiAppstore />
                            <span>Apple Store</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 h-100 banner-image__wrapper">
                    {/* <img src={ BannerImage } className="banner__image" alt="BannerImage" /> */}
                    <div className="banner__image"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerComp