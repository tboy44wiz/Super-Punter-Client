import { AiOutlineAim } from 'react-icons/ai';
import { GiNightVision } from 'react-icons/gi';

/*=== Import the _SectionHeader_Comp SCSS ===*/
import './_About_Comp.scss';

/*=== Import Images ===*/
import PhoneMockup from "../../../../assets/images/iphone_mockup2.png";

const AboutComp = () => {
  return (
    <section className="AboutComp">
      
      <main className="container main__wrapper">
        <div className="row about__wrapper">
            <div className="col-5 about-left__wrapper">
              <img src={ PhoneMockup } alt="iphone_mockup" className="phone-mockup__image" />
            </div>
            <div className="col-12 col-md-7 about-right__wrapper">
              <div className="row header__wrapper">
                  <div className="col-12">
                      <p className="sub__title">SUPERPUNTERS</p>
                      <h1 className="title">All about superpunters</h1>
                  </div>
              </div>

              <p className="about__paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt adipisci incidunt quae! 
                Quo ducimus dolorum saepe modi, exercitationem minima enim porro nisi, suscipit perferendis rerum 
                ut odit earum. Dolorem, suscipit tenetur. Blanditiis quisquam libero doloribus necessitatibus 
                laboriosam, officiis ab.
              </p>

              <div className="row my-5">
                <div className="col-3 me-4 mission-icon__wrapper">
                  <AiOutlineAim className="mission-vision__icon" />
                </div>
                <div className="col-9 mission-vision__body">
                  <h3 className="title">Mission</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt adipisci incidunt quae! 
                    Quo ducimus dolorum saepe modi.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-3 me-4 vision-icon__wrapper">
                  <GiNightVision className="mission-vision__icon" />
                </div>
                <div className="col-9 mission-vision__body">
                  <h3 className="title">Vision</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt adipisci incidunt quae! 
                    Quo ducimus dolorum saepe modi, exercitationem minima enim porro nisi.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </main>
    </section>
  )
}

export default AboutComp