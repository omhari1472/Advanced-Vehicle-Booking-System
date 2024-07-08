import PropTypes from "prop-types";

const DashboardContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray-1700 flex flex-row items-start justify-between pt-[4.187rem] pb-[0rem] pr-[7.25rem] pl-[13.625rem] box-border max-w-full gap-[1.25rem] text-left text-[3rem] text-white font-inter mq1050:flex-wrap mq1050:justify-center mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[6.813rem] mq750:pr-[3.625rem] mq750:box-border ${className}`}
    >
      <div className="h-[16.375rem] w-[90rem] relative bg-gray-1700 hidden max-w-full" />
      <div className="w-[6.313rem] flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] pr-[1.687rem] pl-[0rem] box-border">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <img
            className="h-[12.063rem] flex-1 relative max-w-full overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/frame.svg"
          />
          <img
            className="h-[7.35rem] w-[4.138rem] absolute !m-[0] bottom-[0.025rem] left-[-3.812rem] overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[2.187rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <h1 className="m-0 relative text-inherit capitalize font-semibold font-inherit z-[1] mq1050:text-[2.375rem] mq450:text-[1.813rem]">
          my Dashboard
        </h1>
      </div>
      <div className="w-[12.625rem] flex flex-row items-start justify-start z-[1]">
        <div className="h-[12.188rem] flex-1 relative">
          <div className="absolute top-[0rem] left-[0rem] w-full h-full">
            <img
              className="absolute h-[88.31%] w-full top-[11.69%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group1.svg"
            />
            <div className="absolute h-[74.26%] w-[calc(100%_-_5.9px)] top-[0%] right-[0.163rem] bottom-[25.74%] left-[0.206rem] z-[1]">
              <img
                className="absolute h-[82.6%] w-full top-[17.4%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-1.svg"
              />
              <div className="absolute h-[44.41%] w-[80.62%] top-[49.45%] right-[11.42%] bottom-[6.15%] left-[7.96%] z-[1]">
                <img
                  className="absolute h-[12.44%] w-[3.67%] top-[71.07%] right-[0.32%] bottom-[16.49%] left-[96.02%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-2.svg"
                />
                <img
                  className="absolute h-[12.44%] w-[3.67%] top-[71.07%] right-[0.32%] bottom-[16.49%] left-[96.02%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-3.svg"
                />
                <img
                  className="absolute h-[19.6%] w-[3.67%] top-[63.76%] right-[8.03%] bottom-[16.64%] left-[88.3%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-4.svg"
                />
                <img
                  className="absolute h-[19.6%] w-[3.67%] top-[63.76%] right-[8.03%] bottom-[16.64%] left-[88.3%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-5.svg"
                />
                <img
                  className="absolute h-[25.19%] w-[3.67%] top-[57.85%] right-[16.32%] bottom-[16.95%] left-[80.01%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className="absolute h-[25.19%] w-[3.67%] top-[57.85%] right-[16.32%] bottom-[16.95%] left-[80.01%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-7.svg"
                />
                <img
                  className="absolute h-[17.11%] w-[3.67%] top-[66.1%] right-[93.3%] bottom-[16.8%] left-[3.04%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-8.svg"
                />
                <img
                  className="absolute h-[10.11%] w-[3.67%] top-[73.09%] right-[85.39%] bottom-[16.8%] left-[10.94%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-9.svg"
                />
                <img
                  className="absolute h-[10.11%] w-[3.67%] top-[73.09%] right-[85.39%] bottom-[16.8%] left-[10.94%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-10.svg"
                />
                <img
                  className="absolute h-[23.17%] w-[3.67%] top-[60.34%] right-[77.99%] bottom-[16.49%] left-[18.34%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-11.svg"
                />
                <img
                  className="absolute h-[23.17%] w-[3.67%] top-[60.34%] right-[77.99%] bottom-[16.49%] left-[18.34%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-12.svg"
                />
                <img
                  className="absolute h-[12.13%] w-[3.67%] top-[71.07%] right-[70.34%] bottom-[16.8%] left-[26%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-13.svg"
                />
                <img
                  className="absolute h-[12.13%] w-[3.67%] top-[71.07%] right-[70.34%] bottom-[16.8%] left-[26%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-14.svg"
                />
                <img
                  className="absolute h-[22.86%] w-[3.67%] top-[60.34%] right-[62.75%] bottom-[16.8%] left-[33.59%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-15.svg"
                />
                <img
                  className="absolute h-[52.1%] w-[3.67%] top-[31.1%] right-[55.28%] bottom-[16.8%] left-[41.05%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-16.svg"
                />
                <img
                  className="absolute h-[73.41%] w-[3.67%] top-[9.8%] right-[47.44%] bottom-[16.8%] left-[48.89%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-17.svg"
                />
                <img
                  className="absolute h-[43.23%] w-[3.67%] top-[39.97%] right-[39.66%] bottom-[16.8%] left-[56.67%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-18.svg"
                />
                <img
                  className="absolute h-[52.1%] w-[3.67%] top-[31.1%] right-[55.28%] bottom-[16.8%] left-[41.05%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-19.svg"
                />
                <img
                  className="absolute h-[43.23%] w-[3.67%] top-[39.97%] right-[39.66%] bottom-[16.8%] left-[56.67%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-20.svg"
                />
                <img
                  className="absolute h-[50.39%] w-[3.67%] top-[32.81%] right-[24.41%] bottom-[16.8%] left-[71.92%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-21.svg"
                />
                <img
                  className="absolute h-[65.79%] w-[3.67%] top-[17.42%] right-[31.94%] bottom-[16.8%] left-[64.39%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-22.svg"
                />
                <img
                  className="absolute h-[5.75%] w-[7.46%] top-[0%] right-[92.54%] bottom-[94.25%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-23.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.32%] top-[97.67%] right-[99.68%] bottom-[0.16%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-24.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[94.94%] bottom-[0.16%] left-[4.43%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-25.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[90.51%] bottom-[0.16%] left-[8.86%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-26.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.7%] top-[97.67%] right-[85.96%] bottom-[0.16%] left-[13.35%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-27.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[81.53%] bottom-[0.16%] left-[17.84%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-28.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[76.98%] bottom-[0.16%] left-[22.39%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-29.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[72.55%] bottom-[0.16%] left-[26.82%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-30.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[3.92%] top-[13.22%] right-[96.08%] bottom-[84.6%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-31.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.7%] top-[97.67%] right-[67.99%] bottom-[0.16%] left-[31.31%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-32.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.63%] top-[97.67%] right-[63.57%] bottom-[0.16%] left-[35.8%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-33.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.2%] top-[97.67%] right-[58.57%] bottom-[0.16%] left-[40.23%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-34.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[0.76%] top-[97.67%] right-[54.65%] bottom-[0.16%] left-[44.59%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-35.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.08%] top-[97.67%] right-[49.84%] bottom-[0.16%] left-[49.08%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-36.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.01%] top-[97.67%] right-[45.48%] bottom-[0.16%] left-[53.51%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-37.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.27%] top-[97.67%] right-[40.67%] bottom-[0.16%] left-[58.06%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-38.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.08%] top-[97.67%] right-[36.43%] bottom-[0.16%] left-[62.49%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-39.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.14%] top-[97.67%] right-[31.88%] bottom-[0.16%] left-[66.98%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-40.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.14%] top-[97.67%] right-[27.39%] bottom-[0.16%] left-[71.47%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-41.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.2%] top-[97.67%] right-[22.83%] bottom-[0.16%] left-[75.96%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-42.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.14%] top-[97.67%] right-[18.66%] bottom-[0.16%] left-[80.2%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-43.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.45%] top-[97.67%] right-[14.17%] bottom-[0.16%] left-[84.38%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-44.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.01%] top-[97.67%] right-[10.37%] bottom-[0.16%] left-[88.61%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-45.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.33%] top-[97.67%] right-[5.88%] bottom-[0.16%] left-[92.79%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-46.svg"
                />
                <img
                  className="absolute h-[2.18%] w-[1.33%] top-[97.67%] right-[1.64%] bottom-[0.16%] left-[97.03%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-47.svg"
                />
                <img
                  className="absolute h-[0.31%] w-full top-[94.09%] right-[0%] bottom-[5.6%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-48.svg"
                />
                <img
                  className="absolute h-[65.79%] w-[3.67%] top-[17.42%] right-[31.94%] bottom-[16.8%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-49.svg"
                />
                <img
                  className="absolute h-[22.86%] w-[3.67%] top-[60.34%] right-[62.75%] bottom-[16.8%] left-[33.59%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-50.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[0.55rem] w-[0.169rem] h-[0.013rem]"
                  alt=""
                  src="/group-51.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[1.044rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-52.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[1.706rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-53.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[2.369rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-54.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[3.025rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-55.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[3.688rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-56.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[4.344rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-57.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[5.006rem] w-[0.331rem] h-[0.013rem] z-[1]"
                  alt=""
                  src="/group-58.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[5.669rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-59.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[6.325rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-60.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[6.988rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-61.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[7.65rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-62.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[8.306rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-63.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[8.969rem] w-[0.331rem] h-[0.013rem]"
                  alt=""
                  src="/group-64.svg"
                />
                <img
                  className="absolute top-[0.588rem] left-[9.631rem] w-[0.169rem] h-[0.013rem]"
                  alt=""
                  src="/group-65.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[93.3%] bottom-[16.8%] left-[3.1%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-66.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.34%] right-[85.45%] bottom-[16.64%] left-[10.94%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-67.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[70.4%] bottom-[16.8%] left-[26%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-68.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[93.36%] bottom-[24.73%] left-[3.04%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-69.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.34%] right-[77.99%] bottom-[16.64%] left-[18.41%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-70.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.41%] right-[78.05%] bottom-[24.57%] left-[18.34%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-71.svg"
                />
                <img
                  className="absolute h-[6.22%] w-[2.47%] top-[60.34%] right-[79.19%] bottom-[33.44%] left-[18.34%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-72.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[47.5%] bottom-[16.8%] left-[48.89%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-73.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[47.56%] bottom-[24.73%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-74.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[57.39%] right-[47.56%] bottom-[33.59%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-75.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[48.83%] right-[47.5%] bottom-[42.15%] left-[48.89%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-76.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[40.9%] right-[47.56%] bottom-[50.08%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src="/group-77.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[32.04%] right-[47.56%] bottom-[58.94%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[6]"
                  alt=""
                  src="/group-78.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[39.78%] bottom-[16.8%] left-[56.61%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-79.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[39.85%] bottom-[24.73%] left-[56.55%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-80.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[57.39%] right-[39.85%] bottom-[33.59%] left-[56.55%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-81.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[48.83%] right-[39.78%] bottom-[42.15%] left-[56.61%] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src="/group-82.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[40.9%] right-[39.85%] bottom-[50.08%] left-[56.55%] max-w-full overflow-hidden max-h-full z-[6]"
                  alt=""
                  src="/group-83.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[24.54%] bottom-[16.8%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/group-84.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[24.54%] bottom-[24.73%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-85.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[57.39%] right-[24.54%] bottom-[33.59%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-86.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[48.83%] right-[24.54%] bottom-[42.15%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-87.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[40.9%] right-[24.54%] bottom-[50.08%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src="/group-88.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[33.28%] right-[24.54%] bottom-[57.7%] left-[71.85%] max-w-full overflow-hidden max-h-full z-[6]"
                  alt=""
                  src="/group-89.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[55.34%] bottom-[16.8%] left-[41.05%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-90.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[55.41%] bottom-[24.73%] left-[40.99%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-91.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[57.39%] right-[55.41%] bottom-[33.59%] left-[40.99%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-92.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[62.75%] bottom-[16.8%] left-[33.65%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-93.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[62.75%] bottom-[24.73%] left-[33.65%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-94.svg"
                />
                <img
                  className="absolute h-[6.07%] w-[2.47%] top-[60.34%] right-[63.88%] bottom-[33.59%] left-[33.65%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-95.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[48.83%] right-[55.34%] bottom-[42.15%] left-[41.05%] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src="/group-96.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[32.97%] right-[55.34%] bottom-[58.01%] left-[41.05%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-97.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[40.9%] right-[55.41%] bottom-[50.08%] left-[40.99%] max-w-full overflow-hidden max-h-full z-[6]"
                  alt=""
                  src="/group-98.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.18%] right-[31.94%] bottom-[16.8%] left-[64.45%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-99.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.25%] right-[32.01%] bottom-[24.73%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-100.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[57.39%] right-[32.01%] bottom-[33.59%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-101.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[48.83%] right-[31.94%] bottom-[42.15%] left-[64.45%] max-w-full overflow-hidden max-h-full z-[5]"
                  alt=""
                  src="/group-102.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[40.9%] right-[32.01%] bottom-[50.08%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[6]"
                  alt=""
                  src="/group-103.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[32.04%] right-[32.01%] bottom-[58.94%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[7]"
                  alt=""
                  src="/group-104.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[23.95%] right-[32.01%] bottom-[67.03%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[8]"
                  alt=""
                  src="/group-105.svg"
                />
                <img
                  className="absolute h-[7.47%] w-[3.04%] top-[17.42%] right-[32.57%] bottom-[75.12%] left-[64.39%] max-w-full overflow-hidden max-h-full z-[9]"
                  alt=""
                  src="/group-106.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[23.02%] right-[47.5%] bottom-[67.96%] left-[48.89%] max-w-full overflow-hidden max-h-full z-[7]"
                  alt=""
                  src="/group-107.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[15.09%] right-[47.56%] bottom-[75.89%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[8]"
                  alt=""
                  src="/group-108.svg"
                />
                <img
                  className="absolute h-[5.29%] w-[2.15%] top-[9.8%] right-[49.02%] bottom-[84.91%] left-[48.83%] max-w-full overflow-hidden max-h-full z-[9]"
                  alt=""
                  src="/group-109.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.49%] right-[16.32%] bottom-[16.49%] left-[80.08%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-110.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.56%] right-[16.38%] bottom-[24.42%] left-[80.01%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-111.svg"
                />
                <img
                  className="absolute h-[8.86%] w-[3.61%] top-[57.85%] right-[16.38%] bottom-[33.28%] left-[80.01%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-112.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.49%] right-[8.03%] bottom-[16.49%] left-[88.36%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-113.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[66.56%] right-[8.1%] bottom-[24.42%] left-[88.3%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-114.svg"
                />
                <img
                  className="absolute h-[2.8%] w-[1.14%] top-[63.92%] right-[10.56%] bottom-[33.28%] left-[88.3%] max-w-full overflow-hidden max-h-full z-[4]"
                  alt=""
                  src="/group-115.svg"
                />
                <img
                  className="absolute h-[9.02%] w-[3.61%] top-[74.49%] right-[0.38%] bottom-[16.49%] left-[96.02%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/group-116.svg"
                />
                <img
                  className="absolute h-[4.35%] w-[1.77%] top-[71.23%] right-[2.28%] bottom-[24.42%] left-[95.95%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/group-117.svg"
                />
              </div>
              <img
                className="absolute h-[0.14%] w-full top-[24.86%] right-[0%] bottom-[75%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/group-118.svg"
              />
              <img
                className="absolute top-[3.1rem] left-[1.794rem] w-[2.569rem] h-[0.863rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-119.svg"
              />
              <img
                className="absolute top-[3.1rem] left-[4.831rem] w-[2.569rem] h-[0.863rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-120.svg"
              />
              <img
                className="absolute top-[3.1rem] left-[7.869rem] w-[2.569rem] h-[0.863rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-121.svg"
              />
              <img
                className="absolute h-[1.66%] w-[1.22%] top-[20.23%] right-[93.88%] bottom-[78.11%] left-[4.9%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/group-122.svg"
              />
              <img
                className="absolute h-[1.66%] w-[1.22%] top-[20.23%] right-[91.79%] bottom-[78.11%] left-[6.99%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/group-123.svg"
              />
              <img
                className="absolute h-[1.66%] w-[1.22%] top-[20.23%] right-[89.7%] bottom-[78.11%] left-[9.08%] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/group-124.svg"
              />
              <img
                className="absolute h-[0.62%] w-[0.15%] top-[0%] right-[14.23%] bottom-[99.38%] left-[85.62%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group-125.svg"
              />
            </div>
          </div>
          <img
            className="absolute top-[10.588rem] left-[0.894rem] w-[10.906rem] h-[0.013rem] z-[2]"
            loading="lazy"
            alt=""
            src="/group-126.svg"
          />
        </div>
      </div>
    </div>
  );
};

DashboardContent.propTypes = {
  className: PropTypes.string,
};

export default DashboardContent;
