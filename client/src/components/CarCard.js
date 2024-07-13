import { useMemo } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const CarCard = ({
  className = "",
  carName,
  propBorder,
  seats,
  luggage,
  doors,
  fuel,
  horsepower,
  engine,
  drive,
  type,
  image,
  price
}) => {
  const carCardStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const history = useNavigate();
  return (
    <div
      className={`flex-1 rounded-xl bg-white box-border flex flex-col items-center justify-start py-[1.375rem] pr-[0.687rem] pl-[0.875rem] gap-[1rem] min-w-[6.875rem] text-left text-[1rem] text-black font-inter border-[1px] border-solid border-gainsboro-400 mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border ${className}`}
      style={carCardStyle}
    >
      <img
        className="w-[14.094rem] h-[8.569rem] relative object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
        <div className="self-stretch flex flex-col items-start justify-center py-[0rem] px-[0.187rem] gap-[0.625rem]">
          <div className="relative capitalize font-semibold inline-block min-w-[7.5rem]">
            {carName}
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[0.625rem] text-dimgray-100">
            <div className="flex flex-col items-start justify-start gap-[0.55rem]">
              <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[2.938rem]">
                seats: {seats}
              </div>
              <div className="relative capitalize inline-block min-w-[3.375rem]">
                Luggage: {luggage}
              </div>
              <div className="relative capitalize inline-block min-w-[2.563rem]">
                doors: {doors}
              </div>
              <div className="relative capitalize inline-block min-w-[3.313rem]">
                fuel: {fuel}
              </div>
            </div>
            <div className="flex flex-col items-end justify-start gap-[0.55rem]">
              <div className="relative text-[0.75rem] capitalize font-medium text-dimgray-900 inline-block min-w-[6.25rem]">
                horsepower: {horsepower}
              </div>
              <div className="relative capitalize inline-block min-w-[3.75rem]">
                engine:{engine}
              </div>
              <div className="relative capitalize inline-block min-w-[2.125rem]">
                drive:{drive}
              </div>
              <div className="relative capitalize inline-block min-w-[5rem]">
                type: {type}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-between gap-[1.25rem] text-[0.75rem] text-gray-800">
          <div className="flex flex-col items-center justify-start gap-[0.331rem]">
            <div className="relative capitalize inline-block min-w-[3.563rem]">
              per hours
            </div>
            <b className="relative text-[1.125rem] capitalize inline-block text-black min-w-[2.25rem] whitespace-nowrap">
              ${price}
            </b>
          </div>
          <button onClick={()=> history("/car-booking-confirm")}className="cursor-pointer shadow-[0px_5.3px_17.68px_rgba(0,_0,_0,_0.15)] rounded-[3.54px] bg-black flex flex-row items-center justify-center pt-[0.55rem] px-[0.875rem] pb-[0.556rem] whitespace-nowrap text-[0.625rem] text-white">
            <div className="relative capitalize font-semibold inline-block min-w-[2.625rem]">
              rent Car
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  className: PropTypes.string,
  carImage: PropTypes.string,
  jeepRenegade: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default CarCard;
