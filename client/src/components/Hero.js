// import PickupIcon from "./PickupIcon";
// import PropTypes from "prop-types";

// const Hero = ({ className = "" }) => {
//   return (
//     <section
//       className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.237rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter ${className}`}
//     >
//       <div className="w-[72.419rem] flex flex-row items-start justify-center gap-[1.25rem] max-w-full mq1050:flex-wrap">
//         <div className="flex-1 flex flex-row items-start justify-start relative min-w-[27.125rem] max-w-full mq750:min-w-full">
//           <h1 className="!m-[0] absolute top-[5.688rem] right-[-3.937rem] text-inherit capitalize font-semibold font-inherit mq750:text-[2.688rem] mq450:text-[2rem]">
//             Car Booking
//           </h1>
//           <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[1.456rem] max-w-full z-[1]">
//             <div className="self-stretch h-[25.25rem] relative">
//               <img
//                 className="absolute top-[0rem] left-[0rem] rounded-mid w-full h-full object-contain"
//                 alt=""
//                 src="/image-57@2x.png"
//               />
//               <img
//                 className="absolute top-[13.6rem] left-[37.444rem] w-[2.813rem] h-[2.813rem] object-contain z-[1]"
//                 loading="lazy"
//                 alt=""
//                 src="/group-10000040701@2x.png"
//               />
//               <img
//                 className="absolute top-[13.6rem] left-[1.338rem] w-[2.813rem] h-[2.813rem] z-[1]"
//                 loading="lazy"
//                 alt=""
//                 src="/group-10000040711.svg"
//               />
//             </div>
//             <div className="self-stretch flex flex-row items-start justify-start gap-[1.462rem] mq750:flex-wrap">
//               <img
//                 className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-8281@2x.png"
//               />
//               <img
//                 className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-8301@2x.png"
//               />
//               <img
//                 className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
//                 loading="lazy"
//                 alt=""
//                 src="/rectangle-8291@2x.png"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="w-[29.544rem] shadow-[0px_189.2px_52.61px_rgba(209,_209,_209,_0),_0px_121.4px_48.57px_rgba(209,_209,_209,_0.01),_0px_67.8px_40.47px_rgba(209,_209,_209,_0.05),_0px_30.4px_30.35px_rgba(209,_209,_209,_0.09),_0px_7.1px_16.19px_rgba(209,_209,_209,_0.1),_0px_0px_0px_rgba(209,_209,_209,_0.1)] rounded-[12.14px] bg-whitesmoke-700 box-border flex flex-col items-start justify-start pt-[1.937rem] px-[1.75rem] pb-[2rem] relative gap-[1.806rem] min-w-[29.544rem] max-w-full z-[1] text-[1rem] text-black border-[1px] border-solid border-gainsboro-500 mq750:pt-[1.25rem] mq750:pb-[1.313rem] mq750:box-border mq750:min-w-full mq1050:flex-1">
//           <div className="absolute !m-[0] top-[14.738rem] left-[3.038rem] text-[0.756rem] capitalize font-outfit text-gray-500 inline-block min-w-[4.938rem]">
//             DD/MM/yYYY
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start gap-[1.268rem]">
//             <PickupIcon
//               locationIcon="/vector-21.svg"
//               group1000004068="/group-10000040681.svg"
//               rectangle743="/rectangle-7431.svg"
//               propGap="0.637rem"
//             />
//             <div className="self-stretch flex flex-col items-start justify-start gap-[0.631rem]">
//               <div className="flex flex-row items-start justify-start gap-[0.631rem]">
//                 <img
//                   className="h-[1.519rem] w-[1.519rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
//                   loading="lazy"
//                   alt=""
//                   src="/uilcalender1.svg"
//                 />
//                 <div className="flex flex-col items-start justify-start pt-[0.168rem] px-[0rem] pb-[0rem]">
//                   <div className="relative capitalize font-medium inline-block min-w-[3.813rem] shrink-0">
//                     Pick-up
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch flex flex-row items-start justify-start gap-[0.95rem] text-[0.725rem] text-gray-500 mq450:flex-wrap">
//                 <div className="h-[3.163rem] flex-1 relative min-w-[10.25rem]">
//                   <img
//                     className="absolute top-[0rem] left-[0rem] rounded-[4.05px] w-full h-full z-[1]"
//                     alt=""
//                     src="/rectangle-7441.svg"
//                   />
//                   <div className="absolute top-[1.144rem] left-[1.3rem] capitalize inline-block min-w-[4.75rem] z-[2]">
//                     DD/MM/yYYY
//                   </div>
//                 </div>
//                 <div className="h-[3.163rem] w-[9.181rem] relative text-[0.75rem]">
//                   <img
//                     className="absolute top-[0rem] left-[0rem] rounded-[4.05px] w-full h-full"
//                     alt=""
//                     src="/rectangle-7451.svg"
//                   />
//                   <div className="absolute top-[1.144rem] left-[1.181rem] capitalize inline-block min-w-[3.313rem] z-[1]">
//                     12.30 pM
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="self-stretch flex flex-col items-start justify-start gap-[0.631rem]">
//               <div className="flex flex-row items-start justify-start gap-[0.631rem]">
//                 <img
//                   className="h-[1.519rem] w-[1.519rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
//                   alt=""
//                   src="/uilcalender1.svg"
//                 />
//                 <div className="flex flex-col items-start justify-start pt-[0.162rem] px-[0rem] pb-[0rem]">
//                   <div className="relative capitalize font-medium inline-block min-w-[4.313rem] shrink-0">
//                     Drop-off
//                   </div>
//                 </div>
//               </div>
//               <div className="self-stretch flex flex-row items-start justify-start gap-[0.95rem] text-[0.75rem] text-gray-500 mq450:flex-wrap">
//                 <div className="h-[3.163rem] flex-1 relative min-w-[10.25rem]">
//                   <img
//                     className="absolute top-[0rem] left-[0rem] rounded-[4.05px] w-full h-full"
//                     alt=""
//                     src="/rectangle-7441.svg"
//                   />
//                   <div className="absolute top-[1.138rem] left-[1.269rem] capitalize inline-block min-w-[4.938rem] z-[1]">
//                     DD/MM/yYYY
//                   </div>
//                 </div>
//                 <div className="h-[3.163rem] w-[9.125rem] relative">
//                   <img
//                     className="absolute top-[0rem] left-[0rem] rounded-[4.05px] w-full h-full"
//                     alt=""
//                     src="/rectangle-745-11.svg"
//                   />
//                   <div className="absolute top-[1.138rem] left-[1.169rem] capitalize inline-block min-w-[3.313rem] z-[1]">
//                     12.30 pM
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="self-stretch flex flex-col items-start justify-start gap-[0.481rem]">
//             <div className="relative capitalize font-semibold inline-block min-w-[4.188rem]">
//               Duration
//             </div>
//             <div className="self-stretch flex flex-row items-center justify-between py-[0rem] pr-[0.062rem] pl-[0rem] gap-[1.25rem] text-[0.75rem] text-dimgray-200 mq450:flex-wrap">
//               <div className="relative capitalize font-medium inline-block min-w-[3.813rem]">
//                 7.75 hours
//               </div>
//               <div className="shadow-[0px_18.2px_5.06px_rgba(145,_136,_136,_0),_0px_12.1px_5.06px_rgba(145,_136,_136,_0.01),_0px_7.1px_4.05px_rgba(145,_136,_136,_0.05),_0px_3px_3.04px_rgba(145,_136,_136,_0.09),_0px_1px_2.02px_rgba(145,_136,_136,_0.1),_0px_0px_0px_rgba(145,_136,_136,_0.1)] rounded-[2.02px] bg-white flex flex-row items-start justify-start py-[0.618rem] px-[1.5rem] text-[1.088rem] text-darkslategray-900">
//                 <div className="relative capitalize font-semibold inline-block min-w-[3.813rem] whitespace-nowrap">
//                   $36.65
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button className="cursor-pointer [border:none] pt-[1.125rem] px-[1.25rem] pb-[1.131rem] bg-gray-2100 w-[25.294rem] rounded-[10.12px] flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full hover:bg-darkslategray-700">
//             <div className="relative text-[1rem] uppercase font-semibold font-inter text-white text-left inline-block min-w-[5.688rem]">
//               book now
//             </div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// Hero.propTypes = {
//   className: PropTypes.string,
// };

// export default Hero;
import { Form } from "react-router-dom";
import PickupIcon from "./PickupIcon";
import PropTypes from "prop-types";
import FormItem from "./FormItem";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[1.237rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[3.375rem] text-white font-inter ${className}`}
    >
      <div className="w-[72.419rem] flex flex-row items-start justify-center gap-[1.25rem] max-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[27.125rem] max-w-full mq750:min-w-full">
          <h1 className="!m-[0] absolute top-[5.688rem] right-[-3.937rem] text-inherit capitalize font-semibold font-inherit mq750:text-[2.688rem] mq450:text-[2rem]">
            Car Booking
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.006rem] box-border gap-[1.456rem] max-w-full z-[1]">
            <div className="self-stretch h-[25.25rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-mid w-full h-full object-contain"
                alt=""
                src="/image-57@2x.png"
              />
              <img
                className="absolute top-[13.6rem] left-[37.444rem] w-[2.813rem] h-[2.813rem] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040701@2x.png"
              />
              <img
                className="absolute top-[13.6rem] left-[1.338rem] w-[2.813rem] h-[2.813rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-10000040711.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[1.462rem] mq750:flex-wrap">
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8281@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8301@2x.png"
              />
              <img
                className="self-stretch flex-1 relative rounded-[6.15px] max-w-full overflow-hidden max-h-full object-cover min-w-[9.688rem] min-h-[7.75rem]"
                loading="lazy"
                alt=""
                src="/rectangle-8291@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[29.544rem] shadow-[0px_189.2px_52.61px_rgba(209,_209,_209,_0),_0px_121.4px_48.57px_rgba(209,_209,_209,_0.01),_0px_67.8px_40.47px_rgba(209,_209,_209,_0.05),_0px_30.4px_30.35px_rgba(209,_209,_209,_0.09),_0px_7.1px_16.19px_rgba(209,_209,_209,_0.1),_0px_0px_0px_rgba(209,_209,_209,_0.1)] rounded-[12.14px] bg-whitesmoke-700 box-border flex flex-col items-start justify-start pt-[1.937rem] px-[1.75rem] pb-[2rem] relative gap-[1.806rem] min-w-[29.544rem] max-w-full z-[1] text-[1rem] text-black border-[1px] border-solid border-gainsboro-500 mq750:pt-[1.25rem] mq750:pb-[1.313rem] mq750:box-border mq750:min-w-full mq1050:flex-1">
        <FormItem />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;