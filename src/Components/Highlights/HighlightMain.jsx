import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./HighlightMain.module.css";

function HighlightMain() {
  const data = useSelector((state) => state.dashboard.data);
  const { id } = useParams();
  const payload = data.filter((element) => element.label === id);

  return (
    <div>
      <h2
        style={{
          borderTop: "10px solid #5B5B5B",
          paddingTop: "10px",
          textAlign: "left",
        }}
      >
        Highlights
      </h2>

      <div className={styles.HighlightMain__main}>
        {data &&
          payload[0].categories.map((item, j) => (
            <div className={styles.HighlightMain_cont} key={j}>
              <img
                className={styles.HighlightMain__main_img}
                src={item.source}
              />
              <div className={styles.bottom_left}>DAy aosj askja sjhahjsb</div>
            </div>
          ))}
      </div>

      
    </div>
  );
}

export default HighlightMain;
