import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Number from "../components/Number";
import LinkSection from "../components/LinkSection";
import Services from "../components/Services";
import CustomIT from "../components/CustomIT";
import Model from "../components/Model";
import Skills from "../components/Skills";
import PeopleSlider from "../components/PeopleSlider";
import ProjectShowcase from "../components/ProjectsShowcase";
import TeamShowcase from "../components/TeamShowcase";
import TestimonialSection from "../components/TestimonialSection";

const HomePage=()=>{
    return(
        <>
            <HeroBanner />
            <Number />
            <LinkSection />
            <Services />
            <CustomIT />
            <Model />
            <Skills />
            <PeopleSlider />
            <ProjectShowcase />
            <TeamShowcase />
            <TestimonialSection />
        </>
        
    )
}
export default HomePage;