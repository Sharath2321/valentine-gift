import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  // webPortfolio,
  // mobilePortfolio,
  // designPortfolio,

} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "",
    },
    // {
    //   id: "web",
    //   title: "Machine Learning",
    // },
    // {
    //   id: "mobile",
    //   title: "Image Processing",
    // },
    // {
    //   id: "design",
    //   title: "Other Tech and Programming language",
    // },
    
  ];

  useEffect(() => {
    switch (selected) {
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      // case "web":
      //   setData(webPortfolio);
      //   break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Hover to see</h1>
      <br></br>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""

            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
