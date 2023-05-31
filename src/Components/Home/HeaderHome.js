import React from "react";
import Header from "./HeaderHome.module.css";
function HeaderHome() {
  return (
    <section className={Header.intro}>
      <div className={Header.container}>
        <div className={Header.heroimage}>
          <div className={Header.herotext}>
            <h1 style={{ font: "size 50PX;" }}>
              <span> مرحبًا بكم</span> في موقعنا
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderHome;
