import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllData } from "../../Redux/Action";
import styles from "./Navbar.module.css";
import Navbar1 from "./Navbar1";
import NavbarIcon from "./NavbarIcon";
function Navbar() {
  const data = useSelector((state) => state.dashboard.data);
  const isLoading = useSelector((state) => state.dashboard.isLoading);
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch(getAllData());
  };

  return isLoading ? (
    <div>Loading Please Wait</div>
  ) : (
    <div className={styles.Navbar__Main}>
      {data &&
        data.map((item) => (
          <div onClick={() => history.push(`/${item.label}`)} key={item.id}>
            <NavbarIcon image={item.image} label={item.label} />
            {/* <Navbar1 onClick={() => history.push(`/${data.label}`)} key={data.id}/> */}
          </div>
        ))}
    </div>
  );
}

export default Navbar;
