import React from "react";
import s from './index.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Product({ title, price, description, images }) {
  
  function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					display: 'block',
					// background: 'darkgray',
					borderRadius: '20%',
				}}
				onClick={onClick}
			/>
		);
	}

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={[className, s.prev_btn].join(' ')}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

      const settings = {
        dots: true,       // точки переключатели внизу галереи
        fade: true,       // переход
        infinite: true,   // циклично
        speed: 500,       // скорость
        slidesToShow: 1,  // сколько показывается картинок
        slidesToScroll: 1, // сколько раз менять
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };


  return (
    <div className={s.product_card}>
        <p>Title: { title }</p>
        <p>Price: { price }</p>
        <p>Description: { description }</p>
        {/* <img src={ images } alt="product" /> */}
        
        <div className={s.slider_block}> 
          <Slider {...settings} className={s.slider}>
            <div>
              <img src={images[0]} alt='img1' />
            </div>
            <div>
              <img src={images[1]} alt='img2' />
            </div>
            <div>
              <img src={images[2]} alt='img3' />
            </div>
          </Slider>
        </div>
    </div>
  );
}
