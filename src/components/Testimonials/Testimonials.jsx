import "./Testimonials.scss"
import will from "../../assets/will.webp"
import john from "../../assets/john.webp"
import nicolas from "../../assets/nicolas.webp"
import cloe from "../../assets/cloe.webp"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div id="testimonial" className="testimonial">
      <div className="container">
        <div className="test-info">
          <h2>Testimonials</h2>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={will} alt="" />
              <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde <br /> reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima <br /> fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi <br /> earum unde iusto.”</p>
              <h4>Will Turner</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={john} alt="" />
              <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde <br /> reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima <br /> fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi <br /> earum unde iusto.”</p>
              <h4>John Rooster</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={nicolas} alt="" />
              <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde <br /> reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima <br /> fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi <br /> earum unde iusto.”</p>
              <h4>Nicolas Stainer</h4>
            </SwiperSlide>
            <SwiperSlide>
              <img src={cloe} alt="" />
              <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde <br /> reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima <br /> fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi <br /> earum unde iusto.”</p>
              <h4>Cloe Marena</h4>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default Testimonials