import styles from "./index.module.css";
import Header from "../../components/Header"
import Main from "../../components/Main"


function Home(){
    return(
        <>
             <div className={styles.container}>
                <Header />
                <Main />
            </div>
        </>
    )
}

export default Home;