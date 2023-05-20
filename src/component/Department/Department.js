import React, { useState } from "react";
import styles from "./Department.module.css";
const Department = ({ depart }) => {
  const [selectDepart, setSelectDepart] = useState(null);
  const handlerSelectDepartment = (id) => {
    setSelectDepart(id);
  };

  return (
    <div className={styles.container}>
      <h2>Relating to what departent</h2>
      <div className={styles.content}>
        {depart.map((dep) => (
          <span
            className={selectDepart === dep?.id ? styles.select : styles.depart}
            key={dep.id}
            onClick={() => handlerSelectDepartment(dep?.id)}
          >
            {dep?.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Department;
