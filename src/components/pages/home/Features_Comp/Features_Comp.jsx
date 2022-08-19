import { IoAmericanFootballOutline } from 'react-icons/io5';
import { GiTennisRacket, GiBasketballBasket } from 'react-icons/gi';

import SectionHeaderComp from "../../../layouts/Section_Header/SectionHeader_Comp";

/*=== Import the _Features_Comp SCSS ===*/
import './_Features_Comp.scss';

const FeaturesComp = () => {
  return (
    <section className="FeaturesComp">
        <SectionHeaderComp subTitle="FEATURES" title="Our exciting app features" />

        <main className="container">
            <div className="row features__wrapper">
                <div className="col-12 col-md-6 col-lg-4 features-inner__wrapper">
                    <div className="fist-icon__wrapper">
                        <IoAmericanFootballOutline className='feature__icons' />
                    </div>
                    <h3 className="title">Experts Predictions</h3>
                    <p className="body">
                        Our experts give a star rating for each of their predictions, 
                        followed by a bullet-pointed summary of their reasoning. 
                        The main body of their analysis is separated by subheadings, 
                        while a range of today’s predictions are given at the bottom of the page.
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0 features-inner__wrapper">
                    <div className="second-icon__wrapper">
                        <GiTennisRacket className='feature__icons' />
                    </div>
                    <h3 className="title">Super Tips</h3>
                    <p className="body">
                        Free Super Tips is the home of free sports betting tips.
                        Our experienced tipsters have been finding value in betting for years. 
                        Whether you’re a seasoned stat-loving sports fan who’s addicted to analytics 
                    </p>
                </div>
                <div className="col-12 col-md-12 col-lg-4 mt-5 mt-lg-0 features-inner__wrapper">
                    <div className="third-icon__wrapper">
                        <GiBasketballBasket className='feature__icons' />
                    </div>
                    <h3 className="title">Sports Betting</h3>
                    <p className="body">
                        We offer plenty more than just match previews! Check out our full range 
                        of free football predictions for all types of bet here. We’re honest too, 
                        and will give a star rating for how confident we are for each prediction. 
                    </p>
                </div>
            </div>
        </main>
    </section>
  )
}

export default FeaturesComp