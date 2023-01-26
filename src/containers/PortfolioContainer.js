import About from "../components/About";
import "./PortfolioContainer.css"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LangaugesAndSkills from "../components/LanguagesAndSkills";
import Footer from "../components/Footer";

const PortfolioContainer = () => {

    return (
        <>
            <About />
            <LangaugesAndSkills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default PortfolioContainer;