import React from "react";
import styles from "./IssueTicket.module.css";
import Department from "../../component/Department/Department";
import Pepole from "../../component/Pepole/Pepole";
import SelectIssu from "../../component/SelectIssu/SelectIssu";
import { typeIssue } from "../../DataOfApp";
import Form from "../../component/Form/Form";
import Seperate from "../../component/Seperate";
const IssueTicket = ({ departments, images }) => {
  return (
    <section className={styles.container}>
      <h1>Issue</h1>
      <SelectIssu issue={typeIssue} />
      <Seperate />
      <Department depart={departments} />
      <Seperate />
      <Pepole images={images} />
      <Seperate />
      <Form />
    </section>
  );
};

export default IssueTicket;
