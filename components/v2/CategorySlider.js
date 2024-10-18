import Slider from "react-slick";

const CategorySlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider
      className="jawlatt-slider  my-5 rounded py-4 jawlatt-slide-bg-color"
      {...sliderSettings}
    >
      <div className="box  mx-2 text-center">
        <img
          src="/images/Mask group (36).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">زبيدة ثروت </h5>
        <p>ممثل مصري</p>
      </div>
      <div className="box  mx-2 text-center">
        <img
          src="/images/Mask group (35).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (34).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (33).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت .</p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (32).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/images-3 1.png"
          alt="Card Image 1"
          className="img-fluid rounded "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>&gt;زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (14).2.png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">&gt;زبيدة ثروت </h5>
        <p>مثل مصري</p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (31).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">زبيدة ثروت </h5>
        <p>ممثل مصري</p>
      </div>
      <div className="box  mx-2 text-center">
        <img
          src="/images/Mask group (36).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">زبيدة ثروت </h5>
        <p>ممثل مصري</p>
      </div>
      <div className="box  mx-2 text-center">
        <img
          src="/images/Mask group (35).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (34).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (33).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت .</p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (32).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/images-3 1.png"
          alt="Card Image 1"
          className="img-fluid rounded "
        />
        <h5 className="mt-3">مثل مصري</h5>
        <p>&gt;زبيدة ثروت </p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (14).2.png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">&gt;زبيدة ثروت </h5>
        <p>مثل مصري</p>
      </div>
      <div className="box mx-2 text-center">
        <img
          src="/images/Mask group (31).png"
          alt="Card Image 1"
          className="img-fluid "
        />
        <h5 className="mt-3">زبيدة ثروت </h5>
        <p>ممثل مصري</p>
      </div>
    </Slider>
  );
};

export default CategorySlider;
