import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import PopularInstructur from "../PopularInstructor/PopularInstructur";


const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularInstructur/>
            <PopularClasses/>
        </div>
    );
};

export default Home;