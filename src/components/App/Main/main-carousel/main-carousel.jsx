import React from 'react';
import './main-carousel.scss';

const MainCarousel = () => (
  <div className="main-carousel">
    <div id="carousel-example-fade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://technoguide.com.ua/wp-content/uploads/2018/08/legion520.jpg"
            className="d-block w-100"
            alt="laptop"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://ichip.ru/blobimgs/uploads/2019/01/Razer-1068x572.jpg"
            className="d-block w-100"
            alt="laptop"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://1000pochemu.ru/wp-content/uploads/2016/02/acer-predator-15-17-gaming-laptop-skylake-review-21-950x633.jpg"
            className="d-block w-100"
            alt="laptop"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel-example-fade"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel-example-fade"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
);

export default MainCarousel;
