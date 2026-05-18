import './lmage-marquee.css';

export default function ImageMarquee() {
 const images = [
    "images/slider/Beth.jpg",
    "images/slider/2.png",
    "images/slider/3.png",
    "images/slider/4.png",
    "images/slider/5.png",
    "images/slider/BJ.jpg",
    "images/slider/6.png",
    "images/slider/7.png",
    "images/slider/8.png",
    "images/slider/9.png",
    "images/slider/10.png",
    "images/slider/Dennis.jpg",
    "images/slider/11.png",
    "images/slider/12.png",
    "images/slider/13.png",
    "images/slider/14.png",
    "images/slider/15.png",
    "images/slider/Raven.jpg",
    "images/slider/16.png",
    "images/slider/17.png",
    "images/slider/18.png",
    "images/slider/19.png",
    "images/slider/20.png",
    "images/slider/21.png",
    "images/slider/22.png",

    
    
    
  ];

  return (
    <div className="slider1">
      <div className="slider-track1">
        {[...images, ...images].map((img, index) => (
          <div className="slide1" key={index}>
            <img src={img} alt="slider" />
          </div>
        ))}
      </div>
    </div>
  );
}