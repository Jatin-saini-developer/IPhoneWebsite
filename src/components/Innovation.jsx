import React from "react";

const Innovation = ({ setActiveModal }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-6">
      <div className="mt-16 relative w-[90%] max-w-7xl max-h-[100vh] rounded-3xl  bg-white overflow-y-scroll no-scrollbar animate-modal">
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-lg font-light hover:bg-neutral-800 transition-colors cursor-pointer cursor-pointer"
        >
          ✕
        </button>

        <div className="px-10 pt-10 pb-0">
          <p className="text-sm font-medium text-gray-500 mb-2">Innovation</p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Beautiful and durable, by design.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10">
            <p className="text-gray-700 leading-relaxed text-[28px]">
              <span className="font-semibold text-black">Second to none.</span>{" "}
              iPhone is known for its iconic design and advanced materials —
              like iPhone 17 Pro, which has a heat-forged aluminium unibody and
              is built to deliver exceptional performance. And our thinnest
              iPhone ever, iPhone Air. Hardware and software are designed in
              tandem — like Dynamic Island, Camera Control and the Action
              button.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <img
                src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/innovation/modal_second__d9lhbe9ouu82_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <p className="text-gray-700 text-[28px] leading-relaxed ">
              <span className="font-semibold text-black">Last phone standing.</span>{" "}
               iPhone is protected by Ceramic Shield, which
              is tougher than any smartphone glass or glass ceramic. Our latest
              iPhone models have Ceramic Shield 2 on the front, with 3x better
              scratch resistance.1 iPhone 17 Pro and iPhone Air also have
              Ceramic Shield on the back for added durability. Little spill? No
              biggie — iPhone stands up to splashes from everyday liquids like
              water, coffee and soft drink.2
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <img
                src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/innovation/modal_last__d33bqh7vdo6e_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <p className="text-gray-700 text-[28px] leading-relaxed">
              <span className="font-semibold text-black">Ease of use.</span>{" "}
              We design our hardware and software together for a
              seamless experience. Want to share your contact info? Hold your
              iPhone close to theirs. New AirPods? It’s a one‑tap setup. And
              regular iOS updates keep your iPhone feeling new for years to
              come.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <img
                src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/innovation/modal_ease__ht7w9dw2rk2m_large.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
