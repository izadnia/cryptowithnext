"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Style.module.scss";
import gsap from "gsap";
import { news } from "./news";
import Image from "next/image";

function Slider() {

  const [value, setValue] = useState(0);
  let interval = 6000;
  let timeout:any;
  
  function slide() {
    clearInterval(timeout);
    timeout = setInterval(() => {
        value === 80 ? setValue(0) : setValue(value + 20);
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power2.inOut" },
        });
        tl.from(".bg-slider", { x: "-100%", opacity: 0 })
          .from(".p-slider", { opacity: 0 }, "-=0.8")
          .from(".h-slider", { opacity: 0, y: "30px" }, "-=0.1")
          .fromTo(".button-slider",{opacity:0},{opacity:1},'-=0.1' );
      }, interval);    
  }

  function clickCheck(e:number){
    clearInterval(timeout);
    setValue(e)
  }
  function styleDetection(number:number){
    return `styles.box${number}`
  }

  useEffect(() => {

    slide();
    return () => {
      clearInterval(timeout);
    };
  }, [value]);

  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div
          id="slider"
          style={{ translate: `-${value}%` }}
          className={styles.slider}
        >
          {
          news.map((item,index=0)=>(
            <div key={item.src} className={`${styles.box} ${styles.box1}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">{item.title}</h1>
              <p className="p-slider">
              
                {item.contex}
                <br/>
                <span className="text-gray-600 italic">{item.author}</span>
              </p>
              <button className="button-slider">More on {item.publisher}</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}>
                < img className="z-50" src={item.image}  />
              </div>
            </div>
          </div>
          ))
}

        </div>

        <div id="trail" className={styles.trail}>
          <div
            onClick={() => clickCheck(0) }
            className={`${styles.box1} ${value === 0 ? styles.active : null}`}
          ></div>
          <div
            onClick={() => {
              clickCheck(20)
            }}
            className={`${styles.box2} ${value === 20 ? styles.active : null}`}
          ></div>
          <div
            onClick={() => {
              clickCheck(40)
            }}
            className={`${styles.box3} ${value === 40 ? styles.active : null}`}
          ></div>
          <div
            onClick={() => {
              clickCheck(60)
            }}
            className={`${styles.box4} ${value === 60 ? styles.active : null}`}
          ></div>
          <div
            onClick={() => {
              clickCheck(80)
            }}
            className={`${styles.box5} ${value === 80 ? styles.active : null}`}
          ></div>
        </div>
      </div>
    </div>)
}

export default Slider;
