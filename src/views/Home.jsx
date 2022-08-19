import AppLayoutHOC from '../components/layouts/AppLayout_HOC/AppLayout_HOC';
import AboutComp from '../components/pages/home/About_Comp/About_Comp';
import BannerComp from "../components/pages/home/Banner_Comp/Banner_Comp";
import FeaturesComp from '../components/pages/home/Features_Comp/Features_Comp';
import WorkFlowComp from '../components/pages/home/WorkFlow_Comp/WorkFlow_Comp';
import TestimonialsComp from '../components/pages/home/Testimonials_Comp/Testimonials_Comp';


const Home = () => {
  return (
    <AppLayoutHOC>
        <BannerComp />
        <AboutComp />
        <FeaturesComp />
        <WorkFlowComp />
        <TestimonialsComp />
    </AppLayoutHOC>
  )
}

export default Home