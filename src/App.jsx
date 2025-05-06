import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App(){
    return(
        <BrowserRouter basename="/fclima.github.io">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/projetos" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;