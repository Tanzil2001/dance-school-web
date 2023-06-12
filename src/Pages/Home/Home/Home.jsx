import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import ExtraBgSection from "../ExtraSections/ExtraBgSection";
import ExtraSection1 from "../ExtraSections/ExtraSection1";
import ExtraSection2 from "../ExtraSections/ExtraSection2";
import ExtraSliderSection from "../ExtraSections/ExtraSliderSection";
import PopularInstructur from "../PopularInstructor/PopularInstructur";


const Home = () => {
    return (
        <div>
            <Banner/>
            <ExtraSection1/>
            <PopularInstructur/>
            <PopularClasses/>
            <ExtraSection2/>
            <ExtraSliderSection/>
            <ExtraBgSection/>
        </div>
    );
};

export default Home;