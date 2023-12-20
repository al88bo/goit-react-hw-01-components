import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={css['friend-list']}>
    {friends?.map(friend => (
      <FriendListItem key={friend.id} person={friend} />
    ))}
  </ul>
);
export { FriendList };
