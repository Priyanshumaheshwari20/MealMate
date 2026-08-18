import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function HorizontalGallery() {
  const gallery = useRef();

  useGSAP(() => {
    gsap.to(".track", {
      xPercent: -200,
      ease: "none",

      scrollTrigger: {
        trigger: gallery.current,
        pin: true,
        scrub: true,
        end: "+=3000",
      },
    });
  });

  return (
    <section
      ref={gallery}
      className="h-screen overflow-hidden"
    >
      <div className="track flex gap-10 w-[300vw] p-20">
        <div className="w-96 h-96 bg-yellow-300 rounded-xl flex items-center justify-center text-5xl">
          🍔
        </div>

        <div className="w-96 h-96 bg-red-300 rounded-xl flex items-center justify-center text-5xl">
          🍕
        </div>

        <div className="w-96 h-96 bg-green-300 rounded-xl flex items-center justify-center text-5xl">
          🌮
        </div>

        <div className="w-96 h-96 bg-blue-300 rounded-xl flex items-center justify-center text-5xl">
          🌭
        </div>
      </div>
    </section>
  );
}

export default HorizontalGallery;