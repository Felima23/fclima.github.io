import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App(){
    return(
        <BrowserRouter basename="/fclima.github.io">
            <Routes>
                <Route path="/<fclima.github.io>" element={<Home/>}/>
                <Route path="/sobre<fclima.github.io>" element={<About/>}/>
                <Route path="/projetos<fclima.github.io>" element={<Projects/>}/>
            </Routes>        
        </BrowserRouter>
    )
}

export default App;