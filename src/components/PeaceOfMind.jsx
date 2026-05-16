import React from "react";

const PeaceOfMind = ({ setActiveModal }) => {
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
          <p className="text-sm font-medium text-gray-500 mb-2">
            Peace of Mind{" "}
          </p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Helpful features. <br />
            Just in case.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <img
                  src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/safety/modal_range__bi77h4p9zcnm_large.jpg"
                  alt=""
                />
              </div>

              <div className="col-span-4 flex justify-center items-center">
                <p className="text-[28px]">
                  For urgent help. Crash Detection can detect a severe car crash
                  and call emergency services when you can’t. And with Emergency
                  SOS, iPhone can automatically call for help and share your
                  location with emergency services.9
                  <sup className="text-sm">7</sup>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 flex justify-center items-center">
                <p className="text-[28px]">
                  Everyday reassurance. With Find My, you can securely share
                  your location with friends and family. And in Messages, you
                  can use Check In to automatically let someone know when you’ve
                  reached your destination safely.
                </p>
              </div>

              <div className="col-span-8">
                <img
                  src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/safety/modal_reassurance__lb9dnka9vqai_large.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeaceOfMind;
