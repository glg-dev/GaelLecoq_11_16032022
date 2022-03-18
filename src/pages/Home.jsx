import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import bannerImg from '../assets/banner_img.jpg'



const Home = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('./data/logements.json')
        // const { data } = await res.json()
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.error(error);
        setError(true)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return <span>Oups, il y a eu un problème.</span>
  }

  return (
    <div className='home'>
      <Banner text='Chez vous, partout et ailleurs' picture={bannerImg} />
      {!data ? (
        <h1>Chargement des données...</h1>
      ) : (
        <div className='cards-container'>
          {data.map((house, id) => (
            <NavLink to={'/house/' + house.id} key={`${house.title}-${id}`}>
              <Cards 
              
              cover={house.cover}
              title={house.title}
              />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;