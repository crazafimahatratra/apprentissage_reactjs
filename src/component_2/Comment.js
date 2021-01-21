function Comment(props) {
  console.log(props);
  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo users={props} />
      </div>
      <div className="Comment-text">
        {props.user.comment}
      </div>
      <div className="Comment-date">
        {props.user.date}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.users.user.avatarUrl}
      alt={props.users.user.nom}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar users={props.users} />
      <div className="UserInfo-name">
        {props.users.user.nom}
      </div>
    </div>
  );
}
export default Comment;