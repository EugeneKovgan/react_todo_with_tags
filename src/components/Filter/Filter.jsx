import styles from './Filter.module.scss';

const Filter = ({ filterByName }) => {
  return (
    <div className={styles.filter}>
      <button onClick={() => filterByName('all')}>all</button>
      <button onClick={() => filterByName(false)}>no ready</button>
      <button onClick={() => filterByName(true)}>ready</button>
    </div>
  );
};

export default Filter;
