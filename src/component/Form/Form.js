import React, { useReducer } from "react";

import styles from "./Form.module.css";

const Form = () => {
  const [{ issue, choise1, choise2, note, deadline, file }, setState] =
    useReducer((prev, next) => ({ ...prev, ...next }), {
      issue: "",
      choise1: "",
      choise2: "",
      note: "",
      deadline: "",
      file: "",
    });

  return (
    <div className={styles.l__form}>
      <div className={styles.form}>
        <h1>Issue</h1>
        <div className={styles.form__div}>
          <input
            type="text"
            value={issue}
            className={styles.form__input}
            placeholder=" "
            onChange={(e) => {
              setState({
                issue: e.target.value,
              });
            }}
          />
          <label htmlFor="" className={styles.form__label}>
            Issue
          </label>
        </div>
        <div className={styles.form__div}>
          <input
            type="text"
            value={choise1}
            className={styles.form__input}
            placeholder=" "
            onChange={(e) => {
              setState({
                choise1: e.target.value,
              });
            }}
          />
          <label htmlFor="" className={styles.form__label}>
            Choises
          </label>
        </div>
        <div className={styles.form__div}>
          <input
            type="text"
            value={choise2}
            className={styles.form__input}
            placeholder=" "
            onChange={(e) => {
              setState({
                choise2: e.target.value,
              });
            }}
          />
          <label htmlFor="" className={styles.form__label}>
            Choises
          </label>
        </div>
        <div className={styles.form__div}>
          <textarea
            type="text"
            className={styles.form__input}
            placeholder=" "
            value={note}
            onChange={(e) => {
              setState({
                note: e.target.value,
              });
            }}
          />
          <label htmlFor="" className={styles.form__label}>
            Note
          </label>
        </div>
        <div className={styles.bttn}>
          <label className={styles.upload}>
            <input
              type="file"
              value={file}
              onChange={(e) => {
                setState({
                  file: e.target.value,
                });
              }}
            />
            <img
              src="./images/uplode.png"
              alt="upload file"
              width={50}
              height={50}
            />
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => {
              setState({
                deadline: e.target.value,
              });
            }}
          />
          <button
            className={styles.form__button}
            type="reset"
            onClick={() => {
              setState({
                issue: "",
                choise1: "",
                choise2: "",
                note: "",
                deadline: "",
                file: "",
              });
            }}
          >
            Clean
          </button>
          <button className={styles.form__button}>Submit</button>
          <button className={styles.form__button}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
