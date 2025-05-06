import styles from "./index.module.css";
import Header from "../../components/Header"
import Quemsoueu from "../../components/Quemsoueu";
import Footer from "../../components/Footer";

function About(){
    return(
        <>  
            <div className={styles.container}>
                <Header/>
                <Quemsoueu/>
                <Footer/>
            </div>
        </>
    )
}

export default About;