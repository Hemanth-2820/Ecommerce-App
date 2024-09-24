import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Forever, we are passionate about bringing the best of fashion and
            lifestyle products directly to your doorstep. Since our founding, we
            have been committed to providing a seamless online shopping
            experience with high-quality items that cater to every style and
            occasion. Our mission is to help you express your individuality
            through carefully curated collections that are both affordable and
            trendsetting.
          </p>
          <p>
            We believe in a future where shopping is effortless, enjoyable, and
            personalized to fit your unique preferences. Whether you're looking
            for the latest fashion trends, timeless pieces, or exclusive
            designs, Forever is your one-stop destination for everything style.
            With a customer-first approach, we strive to deliver outstanding
            service and ensure your satisfaction with every purchase. Welcome to
            Forever, where fashion never fades.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Forever, our mission is to provide fashion-forward, high-quality
            products that inspire individuality and confidence. We strive to
            deliver a seamless shopping experience, offering trendsetting styles
            at accessible prices, while prioritizing customer satisfaction and
            sustainability.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Forever, we are dedicated to delivering the highest quality
            products to our customers. 
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At Forever, we prioritize your convenience by offering a seamless
            and hassle-free shopping experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            At Forever, we are committed to providing exceptional customer
            service at every step of your shopping journey.
          </p>
        </div>
      </div>
      
      <NewsletterBox/>
    </div>
  );
};

export default About;
