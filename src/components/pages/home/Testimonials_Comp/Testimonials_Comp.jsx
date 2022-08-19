
import SectionHeaderComp from "../../../layouts/Section_Header/SectionHeader_Comp";

/*=== Import the _Testimonials_Comp SCSS ===*/
import './_Testimonials_Comp.scss';


/*=== Import images ===*/
import userOne from "../../../../assets/images/user1.png";
import userTwo from "../../../../assets/images/user2.png";
import userThree from "../../../../assets/images/user3.png";
import userFour from "../../../../assets/images/user4.png";


const TestimonialsComp = () => {
  const data = [
    {
      id: 1,
      class: "active",
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet,  adipisicing elit. Animi architecto cupiditate dolorum?\n" +
          "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem.",
      image: userOne,
      alt: "Customer Image",
    },
    {
      id: 2,
      class: "non-active",
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet,  elit. Animi architecto cupiditate dolorum?\n" +
          "Accusamus accusantium adipisci aliquam animi architecto autem doloribus eos error esse exercitationem\n" +
          "explicabo  sunt.",
      image: userTwo,
      alt: "Customer Image",
    },
    {
      id: 3,
      class: "non-active",
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet,  elit. Animi architecto cupiditate dolorum?\n" +
          "Accusamus accusantium  doloribus eos error esse exercitationem explicabo id maiores officiis, omnis sunt.",
      image: userThree,
      alt: "Customer Image",
    },
    {
      id: 4,
      class: "non-active",
      name: "Jane Doe",
      text: "Lorem ipsum dolor sit amet,  elit. Animi architecto cupiditate dolorum?\n" +
          "Accusamus  aliquam animi architecto autem doloribus eos error esse exercitationem officiis.",
      image: userFour,
      alt: "Customer Image",
    },
  ];

  return (
    <section className="TestimonialsComp">
      <SectionHeaderComp subTitle="TESTIMONIALS" title="See what our happy users said" />

      <div className="container">
        <div className="row">
          <div className="col-12">

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              <div className="carousel-inner">
                {data.map((eachData) => (
                  <div className={ `carousel-item ${ eachData.class }` } key={ eachData.id}>
                    <div className="customer-testimonial__wrapper">
                      <div className="customer-details__wrapper">
                        <div className="image-name__wrapper">
                          <img src={ eachData.image } className="customer__image" alt={ eachData.alt } />
                          <h5 className="customer__name">{ eachData.name }</h5>
                        </div>
                        <p className="customer__comment">{ eachData.text }</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComp;