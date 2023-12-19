import css from './Statistics.module.css';

const Statistics = ({ stats, title }) => (
  <section className={css.statistics}>
    {title?.length > 0 && <h2 className={css.title}>{title}</h2>}
    <ul className={css['stat-list']}>
      {stats?.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{
            backgroundColor: '#' + Math.random().toString(16).slice(-6),
          }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export { Statistics };
