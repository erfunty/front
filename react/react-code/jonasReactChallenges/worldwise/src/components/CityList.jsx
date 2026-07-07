import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import Message from "./Message";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  console.log(cities);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message="Add your first city by clicking on a city on the map"
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((c) => (
        <CityItem city={c} key={c.id} />
      ))}
    </ul>
  );
}

export default CityList;
