import React from "react";
import styles from "../../styles/Style.module.scss";
function Slider() {
  const sliderdata = [
    {
      title: "I'm the first box",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title: "I'm the second box",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title: "I'm the third box",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      title:"I'm the forth box",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
      title:"I'm the fifth box",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
  ];

  
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.slider}>
          <div className={`${styles.box} ${styles.box1}`}>
            <div className={styles.bg}></div>
            <div className={styles.details}>
              <h1>I'm the first Box</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
                pellentesque eget.
              </p>
              <button>Check Now</button>
            </div>
            <div className={styles.illustration}>
              <div className={styles.inner}></div>
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.prev}
          width="36.898"
          height="41"
          viewBox="0 0 56.898 91"
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(0 91) rotate(-90)"
            fill="#fff"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.next}
          width="36.898"
          height="41"
          viewBox="0 0 56.898 91"
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(56.898) rotate(90)"
            fill="#fff"
          />
        </svg>
        <div className={styles.trail}>
          <div className={`${styles.box1} ${styles.active}`}></div>
          <div className={styles.box2}></div>
          <div className={styles.box3}></div>
          <div className={styles.box4}></div>
          <div className={styles.box5}></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
