import React from "react";

const Camera = ({ setActiveModal }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-6">
      <div className="mt-16 relative w-[90%] max-w-315 max-h-[100vh] rounded-3xl  bg-white overflow-y-scroll no-scrollbar px-5 animate-modal">
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black flex items-center justify-center text-white text-lg font-light hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          ✕
        </button>

        <div className="px-10 pt-10 pb-0">
          <p className="text-sm font-medium text-gray-500 mb-2">
            Cutting-Edge Cameras
          </p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Picture your best photos and videos
          </h2>


          <div className="bg-gray-100 rounded-2xl px-10 py-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 flex items-center justify-center">
                <p className="text-[28px] ">
                  The advanced cameras in iPhone automatically capture
                  phenomenal photos with great detail and colour. And with the
                  Center Stage front camera, you get more flexible ways to frame
                  your selfies and so much more.{" "}
                  <sup className="text-sm">7</sup>
                </p>
              </div>

              <div className="col-span-8 flex items-center justify-center">
                <img
                  src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/camera/modal_stunning__bywf285rkqj6_large.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mt-7">
            <div className="bg-gray-100 rounded-2xl px-10 py-10">
              <div className="w-[80%] mx-auto">
                <p className="text-2xl">
                  Keep on zoomin’. The power of the iPhone camera system gives
                  you a wide range of focal lengths with exceptional framing
                  flexibility — from sharp close‑ups to sweeping wide shots that
                  let you capture more of a scene without stepping back. And get
                  up close like never before with 8x optical-quality zoom on
                  iPhone 17 Pro — the longest zoom ever on an iPhone.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/camera/modal_zoom__ehbous4wk5si_large.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div>
              <p className="text-[28px]">
                Make movies like the movies. Get pro-level videos using 4K 60
                fps Dolby Vision and up to 4K 120 fps on the latest Pro models.
                Use Action mode to steady shaky scenes as you shoot. Boost the
                voices of the people in your video with Audio Mix. Quickly
                access camera tools with Camera Control. And with the Center
                Stage front camera, use Dual Capture to record on front and rear
                cameras simultaneously.7
              </p>
            </div>
            <div>
                <img src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/camera/modal_movies__c2mc1m8exeqa_large.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
