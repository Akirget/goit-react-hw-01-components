import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={styles.item}
            key={id}
            style={{ background: colors[index] }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.protoType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
