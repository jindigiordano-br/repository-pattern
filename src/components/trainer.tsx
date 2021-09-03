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
      <img></img>
      <h3>Element:</h3>
      <p>{trainer.element}</p>
      <h3>City:</h3>
      <p>{trainer.city}</p>
      <h3>Pokemon</h3>
      <p>{trainer.pokemon}</p>
    </div>
)
}