import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

function User(props) {
  const [homePlanet, setHomePlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  const fetchHomePlanet = () => {
    setIsLoading(true);
    fetch(user.homeworld)
      .then((res) => res.json())
      .then((data) => {
        setHomePlanet(data.result.properties.name);
        setIsLoading(false);
      });
    setButtonClick(true);
  };

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result.properties);
        setUser(data.result.properties);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User: {user.name}</h2>
      <button onClick={fetchHomePlanet} disabled={isLoading}>
        Show Home Planet
      </button>
      {!buttonClick ? (
        ""
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Home Planet: {homePlanet}</p>
      )}
      <UserInfo
        eyeColor={user.eye_color}
        hairColor={user.hair_color}
        gender={user.gender}
      />
    </div>
  );
}

export default User;
