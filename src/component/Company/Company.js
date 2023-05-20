import React, { useState } from "react";
import styles from "./Company.module.css";
const Company = ({ company }) => {
  const [selectCompany, setSelectComp] = useState(null);
  const handlerSelectComp = (id) => {
    setSelectComp(id);
  };
  return (
    <div className={styles.container}>
      <h2>Relating to which</h2>
      <div className={styles.content}>
        {company.map((comp) => (
          <button
            key={comp.id}
            className={
              selectCompany === comp.id ? styles.selectComp : styles.bttn
            }
            onClick={() => handlerSelectComp(comp.id)}
          >
            <img className={styles.image} src={comp.source} alt="company" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Company;
