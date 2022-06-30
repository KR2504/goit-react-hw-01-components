import { Profile } from "./ToDoProfile/profile";
import { Statistics } from "./ToDoStatistic/statistic";
import { FriendList } from "./ToDoFriends/friends"
import { TransactionHistory } from "./ToDoTransactions/transactions";

import user from "./data/profile.json";
import statistic from "./data/statistic.json"
import friendsList from "./data/friends.json";
import transactions from "./data/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statistic} />
      <FriendList friends={friendsList} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
