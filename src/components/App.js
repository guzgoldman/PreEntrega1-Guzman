import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

function App() {
  return (
    <>
      <Header/>
      <ItemListContainer
        greeting="E-Commerce en construcción"
      />
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
