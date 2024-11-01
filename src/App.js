import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./store/movieoSlice";

import './App.css'

function App() {
  // const [trendingData, setTrendingData] = useState([]);

  const dispatch = useDispatch()

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results))
      // console.log('response:',);
    } catch (error) {
      console.log("error",error);
    }
  };


  // for Image URL 
  const fetchConfigration = async() =>{
    try {
      const response = await axios.get("/configuration");
      dispatch(setImageURL(response.data.images.secure_base_url+"original"));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTrendingData();
    fetchConfigration();
  }, []);

  return (
    <>
      <main className="pd-14 lg:pb-0">
        <Header />
        <div className="min-h-[90vh]">
          <Outlet />
        </div>
        <div className=''>
        <Footer />
        </div>
        <MobileNavigation />
      </main>
    </>
  );
}

export default App;