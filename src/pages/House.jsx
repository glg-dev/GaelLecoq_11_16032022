import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import Rating from '../components/Rating';
import Tags from '../components/Tags';

const House = () => {
  const { id } = useParams()
  const [houseDetails, setHouseDetails] = useState([])
  const [error, setError] = useState(null)
  const [hostData, setHostData] = useState(null)

  // const fetchIdData = () => {
  //   setLoading(true)
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
  //       setHouseDetails(houseDetails)
  //       setHostData(houseDetails.host)
  //     })
  //     setLoading(false)
  // }

  // useEffect(() => {
  //   fetchIdData()
  // }, [id])

  useEffect(async () => {
      try {
        const response = await fetch('../data/logements.json')
        const dataList = await response.json()
        const houseDetails = dataList.find(object => object.id === id)
        setHouseDetails(houseDetails)
        setHostData(houseDetails.host)
      } catch (error) {
        console.error(error);
        setError(error)
      }
  }, [id])

  if (error) {
    return <span>Oups, il y a eu un problème.</span>
  }

  const { title, pictures, description, host, rating, location, equipments, tags} = houseDetails


  return (
    <div className='house'>
      {!hostData ? (
        <h1>Chargement des données...</h1>
      ) : (
        <div className="body">
          <Gallery pictures={pictures} />
          <div className="content">
            <div className="title">
              <h2>{title}</h2>
              <h3>{location}</h3>
              <Tags tags={tags} />
            </div>
            <div className="infos">
              <div className="owner">
                <span className='host-name'>{host.name}</span>
                <img src={host.picture} alt={host.name} />
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