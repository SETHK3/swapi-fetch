import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/")
      .then((res) => res.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Home">
      {people.map((person) => {
        return <Link to={`/${person.uid}`}>{person.name}</Link>;
      })}
    </div>
  );
}
