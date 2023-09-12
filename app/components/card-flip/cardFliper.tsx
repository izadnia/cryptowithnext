import React, { useEffect } from "react";
import styles from "./Style.module.scss";

interface CardFliperProps{
    color:string,
    title:string,
    price:string,
    priceType:string,
    description:Array<string>,
    icon:string,
    link:string,}


function CardFliper(data:any) {

    return (
    <div className={styles.cardContainer}>
      {data.prop.map((item:CardFliperProps)=>(
         <div key={`${item.title}-${item.price}`} className={styles.cardWrapper}>
         <div className={`${styles.card} ${item.color == 'light' ? styles.light : styles.dark}`}>
           <div className={styles.textOverlay}>

             <h1>{item.title}</h1>
             
             <div className={`${styles.oldPrice} ${item.color == 'light' ? styles.light : styles.dark}`}>
               ${parseInt(item.price)*1.3}
             </div>


             <div className={styles.price}>
               ${item.price} <small> / year</small>
             </div>
             <div className={styles.detailsText}>
                {item.description.map((e)=>(
                    <span key={e}>{e}</span>
                ))}
             </div>
           </div>
           <div className={styles.purchaseButtonContainer}>
             <h2 className={styles.backH2}>{item.title}</h2>
             <i className={`${styles.faSolid} ${styles.faPerson}`}></i>
             <div className={`${styles.purchaseButton} ${item.color == 'light' ? styles.light : styles.dark}`}>
               Purchase
             </div>
           </div>
         </div>
       </div>
      ))}
    </div>
  );
}

export default CardFliper;
