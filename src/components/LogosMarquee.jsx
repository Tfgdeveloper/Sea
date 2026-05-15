import './logos-marquee.css';

export default function LogosMarquee() {
 const images = [
    "images/logos/amazon.png",
    "images/logos/apple.png",
    "images/logos/barnes.png",
    "images/logos/ingramspark.webp",
    "images/logos/kobo.png",
    
  ];

  return (
    <div className="slider">
      <div className="slider-track">
        {[...images, ...images].map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt="slider" />
          </div>
        ))}
      </div>
    </div>
  );
}