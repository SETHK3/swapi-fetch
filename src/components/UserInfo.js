export default function UserInfo(props) {
  return (
    <div>
      <h1>User Info</h1>
      <div className="info-wrapper">
        <h3>{props.hairColor}</h3>
        <h3>{props.eyeColor}</h3>
        <h3>{props.gender}</h3>
      </div>
    </div>
  );
}
