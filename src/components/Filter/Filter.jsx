import styles from './Filter.module.scss';

const Filter = ({ filterByName, listOfTheTags }) => {
  // console.log(listOfTheTags);
  return (
    <div className={styles.filter}>
      <button className={styles.btn_all} onClick={() => filterByName('all')}>
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
