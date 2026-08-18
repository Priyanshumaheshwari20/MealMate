import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Styling() {
  const burger = useRef(null);
  const pizza = useRef(null);
  const momos = useRef(null);
  const chicken =useRef(null);
  const salad = useRef(null);
  const biryani =useRef(null);
  const sandWhich = useRef(null)

  useGSAP(() => {
    // Burger right side se aayega
    gsap.from(burger.current, {
      x: 500,
      rotate: -180,
      scale: 0.5,
      opacity: 0,
      delay: 1,
      duration: 1.8,
      ease: "back.out(1.7)",
    });

    // Pizza left side se aayega
    gsap.from(pizza.current, {
      x: -500, rotate: 180, scale: 0.5,
      opacity: 0,delay: 1, duration: 1.8,
      ease: "back.out(1.7)",
    });

    gsap.from(momos.current , {
    x:-500,rotate:180,scale:0.5,opacity:0,
    delay:1,duration:1.8,ease:"back.out(1.7)"
  })

  gsap.from(chicken.current , {
    x:-500,rotate:360,scale:0.5,
    opacity:0,delay:1,duration:1.8,
    ease:"back.out(1.7)"
  })

  gsap.from(salad.current, {
    x:-500,rotate:180,scale:0.5,delay:1,
    duration:1.8,
    ease:"back.out(1.7)"
  })
  }, []);

  
  return (
    <div className="flex items-center justify-center gap-20 min-h-screen">
      <img   ref={burger}  src="https://png.pngtree.com/png-clipart/20250418/original/pngtree-close-up-of-burger-png-image_20796497.png"
        alt="Burger" width="300"
      />

      <img ref={pizza} src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png"
        alt="Pizza" width="200"
      />

       <img ref={momos}  src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" alt="momoms"
      width="200"/>
     <img src="https://img.magnific.com/free-photo/indian-butter-chicken-isolated-white-background_123827-20394.jpg?semt=ais_hybrid&w=740&q=80"
     ref={chicken}  width="300"/>
      
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuW2M_aEQjFgXhpqhC6aE5CbpTZhs7TXe1A&s"
            width="200" ref={salad} alt="Healthy Salad Bowl"/>


            <img src="https://rosepng.com/wp-content/uploads/2024/09/s11728_chicken_biryani_isolated_on_white_background_da1c56d4-0b9e-493f-bb41-c2277115512d_0-photoroom.png"
            width="200" ref={salad} alt="Biryani"/>


      </div>
  );
}

export default Styling;