// @ts-ignore
import styles from "./Filter.module.scss";
// @ts-ignore
import React from "react";

type Props = { listOfTheTags: []; filterByName: (string) => [] };

const Filter: React.FC<Props> = ({ filterByName, listOfTheTags }) => {
  return (
    <div className={styles.filter}>
      <button className={styles.btn_all} onClick={() => filterByName("all")}>
        all
      </button>
      {listOfTheTags.map((item) => {
        return (
          <button key={item} onClick={() => filterByName(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
