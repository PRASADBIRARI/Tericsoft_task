import React from "react";
import { useSelector } from "react-redux";
import styles from "./Highlights.module.css";

function Highlights() {
  const data = useSelector((state) => state.dashboard.data);
  const isLoading = useSelector((state) => state.dashboard.isLoading);

  return (
    !isLoading && (
      <div>
        <h2 style={{borderTop:"10px solid #5B5B5B", paddingTop:"10px",textAlign:"left"}}>Highlights</h2>
        <div className={styles.Highlights__main}>
          {data &&
            data[0].categories.map((item) => (
              <div className={styles.Highlights__cont} key={item.id}>
                <img
                  className={styles.Highlights__main_img}
                  src={item.source}
                  alt=""
                />
                <p className={styles.bottom_left}>DAy aosj askja sjhahjsb</p>
              </div>
            ))}
        </div>
      </div>
    )
  );
}

export default Highlights;
