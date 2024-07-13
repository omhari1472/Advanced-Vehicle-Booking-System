import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import Demo1 from "../components/Demo1";
import { getcar } from "../services/api";

const Car = () => {
  const [carData, setCarData] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await getcar();
        setCarData(response.data);
        setFilteredCars(response.data); // Initially set filtered cars to all cars
        console.log("car", response.data);
      } catch (error) {
        console.error("Failed to fetch car data:", error.message);
      }
    };

    fetchCarData();
  }, []);

  useEffect(() => {
    filterCars(); // Update filtered cars whenever search query, brand, or price filter changes
  }, [searchQuery, brandFilter, priceFilter, carData]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBrandFilterChange = (event) => {
    setBrandFilter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const filterCars = () => {
    let filtered = carData;

    if (searchQuery) {
      filtered = filtered.filter((car) =>
        car.carName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (brandFilter) {
      filtered = filtered.filter((car) =>
        car.brand.toLowerCase().includes(brandFilter.toLowerCase())
      );
    }

    if (priceFilter) {
      filtered = filtered.filter((car) => car.price <= parseInt(priceFilter, 10));
    }

    setFilteredCars(filtered);
  };

  return (
    <div className="w-full relative bg-whitesmoke-800 overflow-hidden flex flex-col items-start justify-start gap-[19.375rem] leading-[normal] tracking-[normal] text-left text-[2.5rem] text-white font-inter mq450:gap-[4.813rem] mq750:gap-[9.688rem]">
      <div className="w-full h-[22.5rem] absolute !m-[0] top-[6.75rem] right-[0rem] left-[0rem] bg-gray-1700 overflow-hidden shrink-0">
        <img
          className="absolute top-[0.563rem] left-[-9.25rem] w-[43.294rem] h-[24.919rem]"
          alt=""
          src="/map.svg"
        />
        <div className="absolute top-[7.5rem] left-[calc(50%_-_300px)] capitalize font-semibold z-[1] mq1050:text-[2rem] mq450:text-[1.5rem]">
          Rent a car Rent Your Freedom
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-800 overflow-x-auto flex flex-row items-start justify-center pt-[2.437rem] pb-[1.812rem] pr-[1.25rem] pl-[1.625rem] gap-[0.25rem] z-[2] text-[1.063rem] text-gray-2200">
        <div className="w-[25.281rem] shrink-0 flex flex-col items-start justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border text-[1.638rem]">
          <div className="relative font-semibold inline-block min-w-[5.188rem] mq450:text-[1.313rem]">
            Drivee
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <div className="relative capitalize font-medium inline-block min-w-[4rem]">
            hosting
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pr-[1.687rem] pl-[0rem]">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[1.968rem]">
            <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem]">
              <div className="relative capitalize font-medium inline-block min-w-[5.75rem]">
                Contact us
              </div>
            </div>
            <div className="relative capitalize font-medium inline-block min-w-[4.25rem]">
              Account
            </div>
          </div>
        </div>
        <div className="w-[25rem] shrink-0 flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[2.125rem] h-[2.125rem] relative rounded-[50%] object-cover"
            alt=""
            src="/ellipse-11@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.518rem] max-w-full text-[0.75rem] text-dimgray-800 mq750:gap-[1.25rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[72.5rem] flex flex-col items-end justify-start gap-[3.125rem] max-w-full mq750:gap-[1.563rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full">
              <div className="w-[52.281rem] flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[16.938rem] w-[30.813rem] absolute !m-[0] top-[-13.437rem] right-[-18.156rem] object-contain z-[2]"
                  alt=""
                  src="/car-rentalpana-1@2x.png"
                />
                <div className="flex-1 shadow-[0px_20px_45px_rgba(179,_179,_179,_0.15)] rounded-3xs bg-white box-border flex flex-row items-end justify-center py-[2.375rem] px-[1.25rem] shrink-0 max-w-full z-[3] border-[1.2px] border-solid border-lightgray-300">
                  <div className="overflow-x-auto flex flex-row items-end justify-start gap-[1.968rem] max-w-full mq750:gap-[1rem]">
                    <input
                      placeholder="Search"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                      className="w-[9.188rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0.5rem] px-[0.875rem] gap-[1.25rem] border-[1px] border-solid border-gainsboro-900"
                    />
                    <input
                      placeholder="Budget"
                      value={priceFilter}
                      onChange={handlePriceFilterChange}
                      className="w-[4.8rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border shrink-0 flex flex-row items-center justify-start py-[0.5rem] pr-[0.812rem] pl-[0.875rem] gap-[0.656rem] border-[1px] border-solid border-gainsboro-900"
                    />
                    <input
                      placeholder="Brand"
                      value={brandFilter}
                      onChange={handleBrandFilterChange}
                      className="w-[5.05rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-4xs-4 bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] pr-[0.812rem] pl-[0.875rem] gap-[0.656rem] border-[1px] border-solid border-gainsboro-900"
                    />
                    <div className="w-[4.875rem] shadow-[0px_0px_0px_rgba(0,_0,_0,_0.3)] rounded-lg bg-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0.5rem] px-[0.812rem] gap-[0.312rem] border-[1px] border-solid border-gainsboro-900">
                      <div className="relative font-medium inline-block min-w-[1.875rem] whitespace-nowrap">
                        Filter
                      </div>
                      <img
                        className="h-[0.938rem] w-[0.938rem] relative overflow-hidden shrink-0 min-h-[0.938rem]"
                        alt=""
                        src="/mifilter.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] shrink-0 text-[1rem] text-black">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-[0rem] pr-[0.375rem] pl-[0rem] gap-[1.25rem_1.193rem]">
                {filteredCars.map((car, index) => (
                  <div key={index}>
                    <CarCard
                      carName={car.carName}
                      seats={car.seats}
                      luggage={car.luggage}
                      doors={car.doors}
                      fuel={car.fuel}
                      horsepower={car.horsepower}
                      engine={car.engine}
                      drive={car.drive}
                      type={car.type}
                      image={car.image}
                      price={car.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Demo1 />
      </div>
    </div>
  );
};

export default Car;
