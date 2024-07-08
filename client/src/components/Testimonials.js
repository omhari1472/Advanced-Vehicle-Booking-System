import TestimonialItems from "./TestimonialItems";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <div
      className={`w-[78.338rem] flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[1.825rem] max-w-full text-center text-[3.15rem] text-gray-2300 font-inter ${className}`}
    >
      <div className="w-[49.994rem] relative leading-[139.02%] capitalize font-semibold inline-block max-w-full shrink-0 mq450:text-[1.875rem] mq450:leading-[2.625rem] mq1050:text-[2.5rem] mq1050:leading-[3.5rem]">
        What your neighbors are saying about drivee
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.712rem_1.618rem] min-h-[26.375rem] shrink-0 text-[1.313rem] text-black">
        <TestimonialItems
          andrewD="Andrew D"
          userIcons="/ellipse-23@2x.png"
          star7="/star-7.svg"
          star8="/star-8.svg"
          loveThisCarIWishICouldRen="Love this car I wish I could rent monthly."
        />
        <TestimonialItems
          andrewD="Greg S"
          userIcons="/ellipse-23-1@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8.svg"
          loveThisCarIWishICouldRen="Thank you very much. I love this car. Black leather FTW!"
          propBoxShadow="0px 87.1px 24.14px rgba(196, 196, 196, 0), 0px 55.6px 22.04px rgba(196, 196, 196, 0.01), 0px 31.5px 18.89px rgba(196, 196, 196, 0.05), 0px 13.6px 13.65px rgba(196, 196, 196, 0.09), 0px 3.1px 7.35px rgba(196, 196, 196, 0.1), 0px 0px 0px rgba(196, 196, 196, 0.1)"
          propPadding="1.25rem 1.187rem 1.25rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Laura N"
          userIcons="/ellipse-23-2@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8-2.svg"
          loveThisCarIWishICouldRen="It's a great car to do short trips in. Thanks for listing it on drivee."
          propBoxShadow="0px 97.6px 27.29px rgba(196, 196, 196, 0), 0px 63px 25.19px rgba(196, 196, 196, 0.01), 0px 34.6px 20.99px rgba(196, 196, 196, 0.05), 0px 15.7px 15.75px rgba(196, 196, 196, 0.09), 0px 4.2px 8.4px rgba(196, 196, 196, 0.1), 0px 0px 0px rgba(196, 196, 196, 0.1)"
          propPadding="1.25rem 1.187rem 0.437rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Shayna P"
          userIcons="/ellipse-23-3@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8.svg"
          loveThisCarIWishICouldRen="Great ride! Awesome mileage, smooth and fun! Thanks!!"
          propBoxShadow="0px 115.5px 32.54px rgba(196, 196, 196, 0), 0px 74.5px 29.39px rgba(196, 196, 196, 0.01), 0px 42px 25.19px rgba(196, 196, 196, 0.05), 0px 18.9px 18.89px rgba(196, 196, 196, 0.09), 0px 4.2px 10.5px rgba(196, 196, 196, 0.1), 0px 0px 0px rgba(196, 196, 196, 0.1)"
          propPadding="1.25rem 1.187rem 1.25rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Garrick W"
          userIcons="/ellipse-23-4@2x.png"
          star7="/star-7.svg"
          star8="/star-8.svg"
          loveThisCarIWishICouldRen="Thanks again for letting me use the Volvo. Car is clean and tank is full!"
          propBoxShadow="0px 98.7px 27.29px rgba(196, 196, 196, 0), 0px 63px 25.19px rgba(196, 196, 196, 0.01), 0px 35.7px 20.99px rgba(196, 196, 196, 0.05), 0px 15.7px 15.75px rgba(196, 196, 196, 0.09), 0px 4.2px 8.4px rgba(196, 196, 196, 0.1), 0px 0px 0px rgba(196, 196, 196, 0.1)"
          propPadding="1.25rem 1.187rem 0.312rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Erik R"
          userIcons="/ellipse-23-5@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8-2.svg"
          loveThisCarIWishICouldRen="Thank you for letting me rent your Jeep it was just what we needed to get around."
          propBoxShadow="unset"
          propPadding="1.25rem 1.187rem 0.312rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Michael H"
          userIcons="/ellipse-23-6@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8.svg"
          loveThisCarIWishICouldRen="Your car was excellent. Thank you for allowing me to borrow your car on my trip"
          propBoxShadow="unset"
          propPadding="1.25rem 1.187rem 0.437rem 1.312rem"
        />
        <TestimonialItems
          andrewD="Gregg E"
          userIcons="/ellipse-23-7@2x.png"
          star7="/star-7-1.svg"
          star8="/star-8-2.svg"
          loveThisCarIWishICouldRen="Thanks for letting me use your Civic!"
          propBoxShadow="unset"
          propPadding="1.25rem 1.187rem 1.25rem 1.312rem"
        />
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
