import Photo from "./components/nav";
import Info from "./components/main";
import Icons from "./components/icons";
import About from "./components/about";
import  Interests from "./components/interests";
import Footer from "./components/footer";
export default function App() {
    return (
        <div className="cont">
        <Photo/>
        <div className="mainc">
        <Info/>
        <Icons/>
        <About/>
        <Interests/>
        </div>
        <div>
        <Footer/>
        </div>
      
        </div>
    )
}