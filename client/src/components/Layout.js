import PropTypes from "prop-types";

const Layout = ({ className = "" }) => {
  return (
    <header
      className={`w-[86.25rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[2.706rem] box-border max-w-full text-left text-[1.638rem] text-gray-2200 font-inter ${className}`}
    >
      <div className="w-[70.375rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full">
        <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[5.188rem] whitespace-nowrap">
          Drivee
        </a>
        <div className="flex flex-row items-center justify-start text-[1.063rem] mq450:gap-[1rem]">
          <div className="flex flex-row items-center justify-start mq450:gap-[1rem]">
            <div className="flex flex-row items-center justify-start gap-[1.968rem] mq450:gap-[1rem]">
              <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                <div className="flex flex-row items-center justify-start">
                  <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4rem]">
                    hosting
                  </a>
                </div>
                <img
                  className="h-[0.188rem] w-[0.375rem] relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[5.75rem] whitespace-nowrap">
                Contact us
              </a>
              <div className="flex flex-row items-center justify-center gap-[0.25rem]">
                <div className="flex flex-row items-center justify-start">
                  <a className="[text-decoration:none] relative capitalize font-medium text-[inherit] inline-block min-w-[4.25rem]">
                    account
                  </a>
                </div>
                <img
                  className="h-[0.188rem] w-[0.375rem] relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[2.125rem] w-[2.125rem] relative rounded-[50%] object-cover min-h-[2.125rem]"
          loading="lazy"
          alt=""
          src="/ellipse-1@2x.png"
        />
      </div>
    </header>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
