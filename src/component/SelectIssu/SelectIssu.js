import React, { useState } from "react";
import styles from "./SelectIssu.module.css";

const SelectIssu = ({ issue }) => {
  const [selectIssue, setSelectIssue] = useState(null);
  const handlerSelectIssue = (id) => {
    setSelectIssue(id);
  };
  return (
    <div>
      {issue.map((iss) => (
        <button
          className={selectIssue === iss.id ? styles.selectIssue : styles.bttn}
          key={iss.id}
          onClick={() => handlerSelectIssue(iss.id)}
        >
          {iss.type}
        </button>
      ))}
    </div>
  );
};

export default SelectIssu;
