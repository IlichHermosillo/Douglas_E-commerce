import Hero from "./components/hero";
import Navbar from "./components/NavBar/navBar";
import Footer from "./components/footer";
import Blogs from "./components/blogs";
import Partners from "./components/partner";
import Login from "./components/login";
import CreateAccount from "./components/createAccount";
import Product from "./components/product";
import TopProducts from "./components/popularProduct";
import DisplayFeedBack from "./components/displayReview";
import Item from "./components/item";
import {useState} from 'react'

function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

//  useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 800,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

  return (
    <div className="App">
        <Navbar/>
        {/* <Item/> */}
        {/* <Hero/>
        <Blogs/> */}
        {/* Fix the headline here  */}
        {/* <TopProducts /> */}
    
        {/* <DisplayFeedBack/>
        <Footer/> */}
      

        {/* <Hero/>
        <Blogs/>
        <Partners/>
        <Footer/> */}

        {/* <Login/> */}
        {/* <CreateAccount/> */}

        
    </div>
  );
}

export default App;
