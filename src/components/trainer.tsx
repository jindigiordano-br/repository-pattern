import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

export const Trainer = () => {
  const {id} = useParams();
  // @ts-ignore
  const [trainer, setTrainer] = useState({
    id: '',
    name: '',
    element: '',
    city: '',
    pokemon: ''
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTrainer()
  }, [])

  const fetchTrainer = async () => {
    axios
      .get(`http://localhost:4001/trainers/${id}`)
      .then(response => {
        // @ts-ignore
        setTrainer(response.data)
        console.log(trainer)
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the trainer: ${error}`))
  }

  return (
    <div>
      <h2>{trainer.name}</h2>
      <img src='http://example.com'></img>
      <h3>Element:</h3>
      <p>{trainer.element}</p>
      <h3>City:</h3>
      <h4>{trainer.city}</h4>
      <h5>Region:</h5>
      Region from API
      <h3>Pokemon</h3>
      <h4>{trainer.pokemon}</h4>
      <img src='http://example.com'></img>
      <h5>Moves:</h5>
      <ul>
        <li>Move #1</li>
        <li>Move #2</li>
        <li>Move #3</li>
      </ul>
    </div>
)
}