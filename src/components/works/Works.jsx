import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Virtual Assistant with GUI",
      desc:
        "From the day i met you, i knew that the journey of my life is going to be changed. I was right, it was quite an enjoyable moment of my life.You changed my world. I didn't had any reason to live, but you gave me a beautiful reason to live. You always stood with me at good or bad times. ",
      link: "https://github.com/Infinitymaths/Jarvis-2.0",
      img:
        "./assets/image 7.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Sentiment Analysis",
      desc:
        "I know there was many ups and downs in our journey, but thats the part of my life. Even in the tough situation i had the reason to smile and that was you. I dont know what is about to happen next good or bad.. But what i want is to spend rest of my life with you and your memories. I have never forgot any of the moments from the first day we met.",
      link: "https://github.com/Infinitymaths/Django-and-ML/tree/main/ohh-that-its-hurting-main",
      img:
        "./assets/image 8.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Volume controlling using Hands",
      desc:
        "Everytime when i lost my hopes to do anything then you are the only person who always stands with me.",
      link:"https://github.com/Infinitymaths/Opencv-projects/tree/main/Computer-Vision-Volume-Controlling-using-Hands-main",
      img:
        "./assets/image 9.jpg",
    },
    {
      id:"4",
      icon:"./assets/mobile.png",
      title:"OMR Evaluator",
      desc:"I used to think that my sadest part of my life is to have a breakup with you, but then i realized that the sadest part of my life is to lose you completely...",
      link: "https://github.com/Infinitymaths/Opencv-projects/tree/main/CV%20Project%208%20-%20OMR%20Evaluator",
      img: "./assets/image 10.jpg",
    },
    {
      id:"5",
      icon:"./assets/writing.png",
      title:"Data analysis on Citi bank data",
      desc:"I dont know if there is any future ahead with you or not but what i know is whether or not you wil always be the part of my life and memories. Thank you so much for making my life joyful. Once again Happy Valentine day to you SIDDHU ",
      link:"https://github.com/Infinitymaths/one-neuron-projects/tree/main/Tableau%20Projects/Citi%20bike%20data",
      img:"./assets/image 11.jpg",
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      {/* <h1>Projects</h1> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            
            <div className="item">
              <div className="left">
                <div className="leftContainer">               
                  <div className="imgContainer">
                    {/* <img src={d.icon} alt="" /> */}
                  </div>
                  {/* <h2>{d.title}</h2> */}
                  {/* <br></br> */}
                  <b><p>{d.desc}</p> </b>
                  {/* <br></br>  */}
                  {/* <a  href={d.link}><button class="btn">Github Link</button></a>                  */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
