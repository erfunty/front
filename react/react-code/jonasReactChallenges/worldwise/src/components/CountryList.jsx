import Spinner from "../components/Spinner";
import Message from "./Message";
import styles from './CountryList.module.css'
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
  console.log(cities);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message="Add your first city by clicking on a city on the map"
      />
    );
  return (
    <ul className={styles.countryList}>
      {[...new Set (cities.map((c) => JSON.stringify({country:c.country,emoji:c.emoji})))].map((countryS,i)=><CountryItem country={JSON.parse(countryS)} key={countryS} />)//:) i know
      }
    </ul>
  );
}

export default CountryList;
