import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';



const Home = () => {
  const [housesList, setHousesList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchHouses() {
      try {
        const res = await fetch('./data/logements.json')
        // const { housesList } = await res.json()
        const housesList = await res.json()
        setHousesList(housesList)
        console.log(housesList);
      } catch (error) {
        console.error(error);
        setError(true)
      }
    }
    fetchHouses()
  }, [])

  if (error) {
    return <span>Oups, il y a eu un problème.</span>
  }

  return (
    <div className='home'>
      <Banner />
      {!housesList ? (
        <h1>Chargement des données...</h1>
      ) : (
        <div className='cards-container'>
          {housesList.map((house, id) => (
            <Cards 
            key={`${house.title}-${id}`}
            cover={house.cover}
            title={house.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;