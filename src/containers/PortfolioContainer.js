import Portfolio from "../components/PortfolioHome";
import About from "../components/About";
import "./PortfolioContainer.css"
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const PortfolioContainer = () => {

    return (
        <>
            <Portfolio />
            <About />
            <Projects />
            <Contact />
        </>
    )
}

export default PortfolioContainer;