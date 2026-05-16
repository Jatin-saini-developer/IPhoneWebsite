import React from "react";

const IOSIntelligence = ({ setActiveModal }) => {
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
            iOS and Apple Intelligence
          </p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            New look. Even more magic.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  A whole new element of delight.
                </span>{" "}
                The new Liquid Glass design gives you a delightful, consistent
                experience across your apps and devices, so everything you do
                feels fluid. Eliminate distractions with screening tools in
                Phone, FaceTime and Messages. And personalise chats with new
                backgrounds.
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/ios_ai/modal_delight__cc50mget8o4i_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                <span className="font-semibold text-black">
                  {" "}
                  iPhone for all.{" "}
                </span>{" "}
                Built-in accessibility features help you do what you love in the
                ways that work best for you. VoiceOver is the built-in screen
                reader that speaks what’s on your screen. And you can navigate
                your iPhone with gestures or with a connected keyboard or
                braille display.
              </p>
            </div>
            <div>
              <img
                src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/ios_ai/modal_iphone__eme4h9kj0kwi_large.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSIntelligence;
