import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating';
import Tags from '../components/Tags';

const House = () => {
  const { id } = useParams()
  const [houseDetails, setHouseDetails] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const fetchIdData = () => {
  //   fetch('../data/logements.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then((response) => {
  //       const dataList = response.json()
  //       return dataList
  //     })
  //     .then((dataList) => {
  //       const houseDetails = dataList.find(object => object.id === id)
  //       console.log(houseDetails);
  //       setHouseDetails(houseDetails)
  //     })
  // }

  // useEffect(() => {
  //   fetchIdData()
  // }, [])

  useEffect(() => {
    async function fetchIdData() {
      setLoading(true)
      try {
        const response = await fetch('../data/logements.json')
        const dataList = await response.json()
        const houseDetails = dataList.find(object => object.id === id)
        setHouseDetails(houseDetails)
        console.log(houseDetails)
      } catch (error) {
        console.error(error);
        setError(error)
      } finally {
        setLoading(false)
      }
    } fetchIdData()
  }, [])

  if (error) {
    return <span>Oups, il y a eu un problème.</span>
  }

  const { title, pictures, description, host, rating, location, equipments, tags} = houseDetails
  // console.log(pictures.length);


  return (
    <div className='house'>
      {isLoading ? (
        <h1>Chargement des données...</h1>
      ) : (
        <div className="body">
          <Gallery pictures={pictures} />
          <div className="content">
            <div className="title">
              <h2>{title}</h2>
              <h3>{location}</h3>
              {/* <Tags tags={tags} /> */}
            </div>
            <div className="infos">
              <div className="owner">
                {/* <span>{host.name}</span> */}
                {/* <img src={host.picture} /> */}
              </div>
              <Rating rating={rating} />
            </div>
          </div>
          <div className="house-description">
            <Collapse title='Description' content={description} />
            <Collapse title='Équipements' content={equipments} />
          </div>
        </div>
      )}
    </div>
  );
};

export default House;