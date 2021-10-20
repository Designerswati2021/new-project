import Styles from "../styles/service.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function services() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const gallery = [
    {
      id: "1",
      imgsrc: "http://192.168.0.31:3000/banner.jpg",
      heading: "lorem",
      paratext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: "2",
      imgsrc: "http://192.168.0.31:3000/banner.jpg",
      heading: "lorem",
      paratext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "3",
      imgsrc: "http://192.168.0.31:3000/banner.jpg",
      heading: "lorem",
      paratext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "4",
      imgsrc: "http://192.168.0.31:3000/banner.jpg",
      heading: "lorem",
      paratext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: "5",
      imgsrc: "http://192.168.0.31:3000/banner.jpg",
      heading: "lorem",
      paratext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];
  return (
    <div style={{ padding: 50 }} id="service">
      <div>
        <h2 className={Styles.heading}>Services</h2>
      </div>
      <Slider {...settings}>
        {gallery.map((gal) => (
          <div className={Styles.first} key={gal.id}>
            <img src={gal.imgsrc} className={Styles.newimg} />
            <div className={Styles.text}>
              <h3>{gal.heading}</h3>
              <p>{gal.paratext}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default services;
