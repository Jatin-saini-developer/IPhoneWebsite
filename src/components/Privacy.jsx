import React from "react";

const Privacy = ({ setActiveModal }) => {
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
          <p className="text-sm font-medium text-gray-500 mb-2">Privacy</p>

          <h2 className="text-4xl font-bold text-black mb-8 leading-tight">
            Your data. Just where you want it.
          </h2>

          <div className="bg-gray-100 rounded-2xl px-10 py-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 flex justify-center items-center">
                <p className="text-[28px]">
                  Groundbreaking privacy protections. Apple Intelligence is
                  integrated into your iPhone through on-device processing. With
                  Private Cloud Compute, it can draw on larger, Apple-designed
                  server-based models, running on Apple silicon, to handle more
                  complex requests while protecting your privacy.
                  <sup className="text-sm">7</sup>
                </p>
              </div>

              <div className="col-span-8">
                <img
                  src="https://www.apple.com/in/iphone/home/images/overview/consider_modals/privacy/modal_privacy__e7dubfc08ywm_large.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-10 py-10 mt-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <img
                  src="https://www.apple.com/v/iphone/home/cj/images/overview/consider_modals/privacy/modal_sign_in__bvqm1dvv5uqa_large.jpg"
                  alt=""
                />
              </div>

              <div className="col-span-4 flex justify-center items-center">
                <p className="text-[28px]">
                  Sign in safely. The Passwords app makes it easier to access
                  account passwords, passkeys, Wi‑Fi passwords and two‑factor
                  authentication codes stored securely on your device or synced
                  with iCloud Keychain.
                  <sup className="text-sm">7</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
