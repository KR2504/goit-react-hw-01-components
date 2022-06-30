import styles from "./statistic.module.scss"
import PropTypes from "prop-types";

export const Statistics = ({ stats, title }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.list}>
            {stats.map(({ id, label, percentage }) => (
                <li style={{
                    backgroundColor:getRandomHexColor()
                }} className={styles.item} key={id}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}</span>
                </li>
            ))}
        </ul>
    </section>
);

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};