import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Second = () => {
   return (
      <div className={styles.container}>
         <Link href="/">Previus Page</Link>
         Second Page
      </div>
   );
};

export default Second;
