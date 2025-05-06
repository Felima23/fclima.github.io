import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/fclima.github.io/" element={<Home/>}/>
                <Route path="/fclima.github.io/sobre" element={<About/>}/>
                <Route path="/fclima.github.io/projetos" element={<Projects/>}/>
            </Routes>        
        </BrowserRouter>
    )
}

export default App;