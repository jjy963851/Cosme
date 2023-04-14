import { useEffect } from 'react';
import Swiper from 'swiper';

export default function ProductSwiper() {
  useEffect(() => {
    new Swiper('#mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  const products = [
    { name: 'Product 1', description: 'Description for product 1' },
    { name: 'Product 2', description: 'Description for product 2' },
    { name: 'Product 3', description: 'Description for product 3' },
    { name: 'Product 4', description: 'Description for product 4' },
    { name: 'Product 5', description: 'Description for product 5' },
  ];

  const productSlides = products.reduce((acc, product, index) => {
    if (index % 2 === 0) {
      acc.push(
        <div className="swiper-slide" key={index}>
          <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          {index === products.length - 2 && (
            <div className="product-card next-card">
              <h2>Next Card</h2>
              <p>Next card description.</p>
            </div>
          )}
        </div>
      );
    }
    return acc;
  }, []);

  return (
    <div className="swiper-container" id="mySwiper">
      <div className="swiper-wrapper">{productSlides}</div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
