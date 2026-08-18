import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import "./stairs.css";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;

  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(stairParentRef.current, {
      display: "block",
    });

    tl.from(".stair", {
      height: 0,
      duration: 1,
    //   stagger: {
    //     amount: -0.25,
    //   },
      ease: "power2.inOut",
    });

    tl.to(".stair", {
      y: "100%",
      duration: 0.7,
    //   stagger: {
    //     amount: -0.3,
    //   },
      ease: "power3.inOut",
    });

    tl.set(stairParentRef.current, {
      display: "none",
    });

    tl.set(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      delay: 1,
    });
  }, [currentPath]);

  return (
    <>
      <div
        ref={stairParentRef}
        className="stairs-overlay position-fixed top-0 start-0 w-100 vh-100"
      >
        <div className="d-flex h-100 w-100">
          <div className="stair stair-1"></div>
          <div className="stair stair-2"></div>
          <div className="stair stair-3"></div>
          <div className="stair stair-4"></div>
          <div className="stair stair-5"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </>
  );
};

export default Stairs;