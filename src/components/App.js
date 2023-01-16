import { BrowserRouter } from "react-router-dom"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    )
}

export default App
