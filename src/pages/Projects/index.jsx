import styles from "./index.module.css";
import Header from "../../components/Header"
import Projetos from "../../components/Projetos"
import Footer from "../../components/Footer"

function Projects(){
    return(
        <>
            <div className={styles.container}>
                <Header/>
                <Projetos/> 
                <Footer/> 
            </div>
        </>
    )
}

export default Projects;