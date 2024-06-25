import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {GetNews} from '../../Features/Newsroom/newsSlices';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
function NewsRoom() {
  const shuffleArray = (array) => {
    const arrayCopy = [...array]; // Create a copy of the array
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
  };

  const dispatch = useDispatch();
  const NewsState = useSelector((state)=> state?.news?.News)
  const [news,setNews]= useState([])
  useEffect(()=>{
    dispatch(GetNews())
    setNews(NewsState)

  },[dispatch])
  const randomNews = shuffleArray(NewsState).slice(0, 2);

  console.log(randomNews)


  return (
    <section className="home-boxes mb-5 mt-5">
      <div className="container-fluid">
        <div className="product-page-section product-page-section--homepage">
        <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-sm-baseline">
                <h2 className="product-page-section__title">Newsroom</h2>
                <Link to="/AllNews" className="btn news-view-all mb-4 mb-sm-0">View all news</Link>
              </div>
            </div>
          </div>
                

       
          <div className="row">
          {randomNews?.map((news)=>(
            <div className="col-lg-6">
              <div className="home-boxes__box home-boxes__box--white">
                <a href="#" className="wrap-link row flex-column flex-xl-row">
                  <div className="home-boxes__box-left col-12 col-lg">
                    <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" className="img-fluid" alt="" />
                  </div>
                  <div className="home-boxes__box-right col">
                    <h2>{news?.Product?.title}</h2>
                    <p className="home-boxes__date">
      <CalendarTodayIcon sx={{ mr: 1 }} />
      09/02/2024
    </p>
                    <p>{news?.Product?.description}</p>
                    <Link to={`/ProductDetail/${news?.Product.id}`}><span className="btn btn-primary btn-big">View details</span></Link>
                  </div>
                  

                </a>
              </div>
            </div>
                              ))}

          </div>


        </div>
      </div>
    </section>
  );
}

export default NewsRoom;
