import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ person: { avatar, name, isOnline } }) => (
  <li className={css.item}>
    <span className={clsx(css.status, isOnline && css.online)}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

export { FriendListItem };
