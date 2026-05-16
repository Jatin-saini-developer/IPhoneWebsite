import React from "react";

const ChipBattery = ({ setActiveModal }) => {
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
            Chip and Battery Life
          </p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Fast that lasts.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  Super-smart, super-speedy Apple silicon.
                </span>{" "}
                The A19 and A19 Pro chips are incredibly efficient, delivering
                remarkable battery life. They unlock helpful Apple Intelligence
                tools, power advanced camera features, enable AAA gaming and
                speed up AI workflows with the new Neural Accelerators in the
                GPU.
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/chip-battery/modal_supersmart__fkud9c4nk6eu_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  Long-lasting battery life? 100%.
                </span>{" "}
                 Our hardware and software are
                designed to work together efficiently, so you can do more on a
                single charge — like getting up to 31 hours of video playback on
                iPhone 17 Pro and 37 hours on iPhone 17 Pro Max.10
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/chip-battery/modal_long_lasting__fm21vrmzu5u2_large.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipBattery;
