import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './FriendList/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => (
  <div className="app-wrapper">
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={data} title="Upload stats" />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </div>
);

export { App };
