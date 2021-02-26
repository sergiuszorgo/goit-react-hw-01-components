import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import statisticsData from './db/statistical-data.json';

import profileUsers from './db/user.json';

const {name, tag, location, avatar, stats} = profileUsers;
// console.log(profileUsers);

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats}/>
      <Statistics title='statistics' stats={statisticsData}/>
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
