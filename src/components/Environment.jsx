import React from "react";

const Environment = ({ setActiveModal }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-6">
      <div className="mt-16 relative w-[90%] max-w-7xl max-h-[100vh] rounded-3xl  bg-white overflow-y-scroll no-scrollbar animate-modal">
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-lg font-light hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="px-10 pt-10 pb-0">
          <p className="text-sm font-medium text-gray-500 mb-2">Environment</p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Designed with the earth in mind.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  More recycled content? Naturally.{" "}
                </span>{" "}
                We’re significantly expanding the use of key recycled metals in
                iPhone batteries, magnets and circuit boards. Case in point: Our
                latest models contain 95% recycled lithium in the battery.8
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/environment/modal_recycle_air__cjh8rpozibrm_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  Apple Trade In.{" "}
                </span>{" "}
                When you’re ready to buy a new iPhone, you can trade in your
                current iPhone or Android device and apply any credit towards
                your purchase. If your device isn’t eligible for credit, we’ll
                recycle it for free.
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/environment/modal_trade_in__c2ltl61bs2eu_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  Innovation in conservation. {" "}
                </span>{" "}
                Our disassembly robots — Daisy, Dave
                and Taz — recover crucial materials like gold, cobalt, tungsten
                and rare earth elements so they can be recycled and used again.
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/environment/modal_innovation__d4y6s6jahd8i_large.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
