import Image from "next/image";
import { Inter } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  useGSAP(() => {
    gsap.to(".box", {
      motionPath: {
        path: ".track",
        align: ".track",
        type: "cubic",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
      },
      scrollTrigger: {
        trigger: ".track",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
      ease: "none",
    });
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div style={{ height: "60vh" }}></div>
      <div className="box" data-speed="0"></div>
      <div className="svg-box flex items-center w-100 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 91.07 1119.57"
          style={{ height: "300vh" }}
        >
          <path
            className="track"
            style={{ fill: "none", stroke: "#000", strokeMiterlimit: "10" }}
            d="M39.19.33s-82,91,0,204,16,194,0,212-79,147,1,251,53,222,0,284,5,168,5,168"
          />
        </svg>
      </div>
      <div style={{ height: "60vh" }}></div>
    </main>
  );
}
