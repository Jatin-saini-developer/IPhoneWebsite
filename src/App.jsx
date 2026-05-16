import { useState } from "react";
import "./App.css";
import Camera from "./components/Camera";
import ChipBattery from "./components/ChipBattery";
import IOSIntelligence from "./components/IOSIntelligence";
import Environment from "./components/Environment";
import Privacy from "./components/Privacy";
import PeaceOfMind from "./components/PeaceOfMind";
import Innovation from "./components/Innovation";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const modalComponents = {
    innovation: Innovation,
    camera: Camera,
    chipBattery: ChipBattery,
    iosIntelligence: IOSIntelligence,
    environment: Environment,
    peaceOfMind: PeaceOfMind,
    privacy: Privacy,
  };

  const ActiveComponent = modalComponents[activeModal];

  return (
    <>
      <div className="w-full  mt-10">
        <div className="mx-auto max-w-6xl w-full">
          <h1 className="mx-auto text-5xl font-bold text-black">
            Get to know iPhone.
          </h1>
        </div>

        <div className="card-container mt-8 relative flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4   pl-[max(1rem,calc((100vw-72rem)/2+1rem))] scroll-pl-[max(1rem,calc((100vw-72rem)/2+1rem))]">
          <button
            onClick={() => {
              setActiveModal("innovation");
            }}
            className="card w-110 h-200 flex items-start justify-items-start text-left relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/v/iphone/home/cj/images/overview/consider/innovation__fmir5mp9zpay_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">Innovation</h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Beautiful and durable, by design.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </button>

          <div
            onClick={() => {
              setActiveModal("camera");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/v/iphone/home/cj/images/overview/consider/camera__dez4cvpw83sm_large_2x.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">
                Cutting-Edge Cameras
              </h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Picture your best photos and videos.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>

          <div
            onClick={() => {
              setActiveModal("chipBattery");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/v/iphone/home/cj/images/overview/consider/chip__fh5j5on49p2e_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">
                Chip and Battery Life
              </h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Fast that lasts.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>

          <div
            onClick={() => {
              setActiveModal("iosIntelligence");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/in/iphone/home/images/overview/consider/ios__8z58j1o80yqi_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">
                iOS and Apple Intelligence
              </h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                New look. Even more magic.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>

          <div
            onClick={() => {
              setActiveModal("environment");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/v/iphone/home/cj/images/overview/consider/environment__c8tpot4ti2qa_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">Environment</h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Designed with the earth in mind.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>

          <div
            onClick={() => {
              setActiveModal("privacy");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/v/iphone/home/cj/images/overview/consider/privacy__cv4ztv5gebyq_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">Privacy</h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Your data. Just where you want it.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>

          <div
            onClick={() => {
              setActiveModal("peaceOfMind");
            }}
            className="card w-110 h-200 relative rounded-2xl overflow-hidden shrink-0 snap-start  transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
          >
            <img
              src="https://www.apple.com/in/iphone/home/images/overview/consider/safety__grtwyqpan8yi_large.jpg"
              alt=""
              className="size-full object-cover"
            />
            <div className="absolute top-0 px-6 py-6">
              <h3 className="text-white text-xl font-medium">Peace of Mind</h3>
              <h1 className="text-white/90 mt-3.5 text-3xl font-bold wrap-break-word">
                Helpful features. Just in case.
              </h1>
            </div>
            <div className="absolute bottom-5 right-5 z-20 bg-white rounded-full p-2">
              <svg
                className="w-6 h-6 fill-black cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path d="m24 16.5h-4.5v-4.5c0-.8286-.6719-1.5-1.5-1.5s-1.5.6714-1.5 1.5v4.5h-4.5c-.8281 0-1.5.6714-1.5 1.5s.6719 1.5 1.5 1.5h4.5v4.5c0 .8286.6719 1.5 1.5 1.5s1.5-.6714 1.5-1.5v-4.5h4.5c.8281 0 1.5-.6714 1.5-1.5s-.6719-1.5-1.5-1.5z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {ActiveComponent && <ActiveComponent setActiveModal={setActiveModal} />}
    </>
  );
}

export default App;
