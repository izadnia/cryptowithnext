"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/Style.module.scss";
import gsap from "gsap";
import { setTimeout } from "timers";

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
          <div className={`${styles.box} ${styles.box1}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">I am the 1 Box</h1>
              <p className="p-slider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button className="button-slider">Check Now1</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box2}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">I am the 2 Box</h1>
              <p className="p-slider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button className="button-slider">Check Now2</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box3}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">I am the 3 Box</h1>
              <p className="p-slider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button className="button-slider">Check Now3</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box4}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">I am the 4 Box</h1>
              <p className="p-slider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button className="button-slider">Check Now4</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
          <div className={`${styles.box} ${styles.box5}`}>
            <div className={`${styles.bg} bg-slider`}></div>
            <div className={styles.details}>
              <h1 className="h-slider">I am the 5 Box</h1>
              <p className="p-slider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button className="button-slider">Check Now5</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
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
    </div>
  );
}

export default Slider;
