import React from "react";
import styles from "./MiniNavBar.module.css";

export default function MiniNavBar() {
  return (
    <div>
      <nav className={styles.MiniNavBar__Main}>
        <li>BMX</li>
        <li>Mountain</li>
        <li>Road</li>
        <li>Track</li>
      </nav>
    </div>
  );
}


// import React from "react";
// import { useSelector } from "react-redux";
// import styles from "./MiniNavBar.module.css";

// function MiniNavBar() {
//   const data = useSelector((state) => state.dashboard.data);
//   const isLoading = useSelector((state) => state.dashboard.isLoading);

//   return (
//     !isLoading && (
//       <div>
//         <div className={styles.MiniNavBar__Main}>
//           {data &&
//             data[0].categories.map((item) => (
//               <nav key={item.id}>
//                 <li>{item.source}</li>
//               </nav>
//             ))}
//         </div>
//       </div>
//     )
//   );
// }

// export default MiniNavBar;
