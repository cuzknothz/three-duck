"use client";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { Why } from "@/screens/Why";

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    []
  );

  return (
    <div ref={sliderRef} className="keen-slider h-screen">
      <div className="keen-slider__slide w-screen h-screen flex justify-center items-center">
        <Why />
      </div>
      <div className="keen-slider__slide w-screen h-screen flex justify-center items-center">
        2
      </div>
      <div className="keen-slider__slide w-screen h-screen flex justify-center items-center">
        3
      </div>
    </div>
  );
}
