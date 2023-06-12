import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import ExtraBgSection from "../ExtraSections/ExtraBgSection";
import ExtraSection1 from "../ExtraSections/ExtraSection1";
import ExtraSection2 from "../ExtraSections/ExtraSection2";
import PopularInstructur from "../PopularInstructor/PopularInstructur";
import './Home.css'
import { motion, useScroll } from "framer-motion";

const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <div className="progress-bar-container">
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
            </div>
            <Banner />
            <ExtraSection1 />
            <PopularClasses />
            <PopularInstructur />
            <ExtraSection2 />
            <ExtraBgSection />
        </div>
    );
};

export default Home;