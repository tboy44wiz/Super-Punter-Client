import SectionHeaderComp from "../../../layouts/Section_Header/SectionHeader_Comp";

/*=== Import the _WorkFlow_Comp SCSS ===*/
import './_WorkFlow_Comp.scss';


const WorkFlowComp = () => {

  const data = [
    {
      id: 1,
      title: 'Dolorem, suscipit tenetur',
      body: 'Our experienced tipsters have been finding value in betting for years.',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor',
      body: 'Esse nesciunt adipisci incidunt quae! Quo ducimus dolorum saepe modi, exercitationem minima.',
    },
    {
      id: 3,
      title: 'Esse nesciunt',
      body: 'Dolorem, suscipit tenetur. Blanditiis quisquam libero doloribus necessitatibus laboriosam.',
    },
    {
      id: 4,
      title: 'Quo ducimus dolorum',
      body: 'Esse nesciunt adipisci incidunt quae! Quo ducimus dolorum saepe modi exercitationem minima.',
    },
  ];

  return (
    <section className="WorkFlowComp">
        <SectionHeaderComp subTitle="GET STARTED" title="Let’s show you how to use Superpunters" />

        <main className="container">
            <div className="row workflow__wrapper">
                {data.map((eachData) => (
                    <div className="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0 workflow__colume">
                        <div className="data__number">{ `0${eachData.id}` }</div>
                        <div className="title-body__wrapper">
                            <h3 className="title">{ eachData.title }</h3>
                            <p className="body">{ eachData.body }</p>
                        </div>
                    </div> 
                ))}
            </div>
        </main>
    </section>
  )
}

export default WorkFlowComp