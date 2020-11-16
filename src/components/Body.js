import Profile from "./Profile";
import ProfileDescription from "./ProfileDescription";
import NewsFeed from "./NewsFeed";
import FriendRequestList from "./FriendRequestList";

function Body() {
  return (
    <React.Fragment>
      <hr />
      <Profile />
      <ProfileDescription />
      <NewsFeed />
      <FriendRequestList />
    </React.Fragment>
  )
}

export default Body;