// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import { TrainerDirectoryList } from './trainerdirectory-list'

// Import styles
import './../styles/trainerdirectory.css'

// Create Trainerdirectory component
export const Trainerdirectory = () => {
  // Prepare states
  const [name, setName] = useState('')
  const [element, setElement] = useState('')
  const [city, setCity] = useState('')
  const [pokemon, setPokemon] = useState('')
  const [trainers, setTrainers] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all trainers on initial render
  useEffect(() => {
    fetchTrainers()
  }, [])

  // Fetch all trainers
  const fetchTrainers = async () => {
    // Send GET request to 'trainers/all' endpoint
    axios
      .get('http://localhost:4001/trainers')
      .then(response => {
        // Update the trainers state
        setTrainers(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the trainer list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setName('')
    setElement('')
    setCity('')
    setPokemon('')
  }

  // Create new trainer
  const handleTrainerCreate = () => {
    // Send POST request to 'trainers/create' endpoint
    axios
      .post('http://localhost:4001/trainers', {
        name: name,
        element: element,
        city: city,
        pokemon: pokemon
      })
      .then(res => {
        console.log(res.data)

        // Fetch all trainers to refresh
        // the trainers on the Trainerdirectory list
        fetchTrainers()
      })
      .catch(error => console.error(`There was an error creating the trainer ${name} : ${error}`))
  }

  // Submit new trainer
  const handleTrainerSubmit = () => {
    // Check if all fields are filled
    if (name.length > 0 && element.length > 0 && city.length > 0 && pokemon.length > 0) {
      // Create new trainer
      handleTrainerCreate()

      console.info(`Trainer ${name} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove trainer
  const handleTrainerRemove = (id: number, element: string) => {
    // Send PUT request to 'trainers/delete' endpoint
    axios
      .delete(`http://localhost:4001/trainers/${id}`, )
      .then(() => {
        console.log(`Trainer ${element} removed.`)

        // Fetch all trainers to refresh
        // the trainers on the Trainerdirectory list
        fetchTrainers()
      })
      .catch(error => console.error(`There was an error removing the trainer ${name}: ${error}`))
  }

  // Reset trainer list (remove all trainers)
  const handleListReset = () => {
    // Send PUT request to 'trainers/reset' endpoint
    axios.put('http://localhost:4001/trainers/reset')
      .then(() => {
        // Fetch all trainers to refresh
        // the trainers on the Trainerdirectory list
        fetchTrainers()
      })
      .catch(error => console.error(`There was an error resetting the trainer list: ${error}`))
  }

  return (
    <>
      <div className="trainer-list-form">
        <div className="form-wrapper" onSubmit={handleTrainerSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="name">Enter name:</label>
              <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="element">Enter element:</label>
              <input className="form-input" type="text" id="element" name="element" value={element} onChange={(e) => setElement(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="city">Enter city:</label>
              <input className="form-input" type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="pokemon">Enter favorite pokemon:</label>
              <input className="form-input" type="text" id="pokemon" name="pokemon" value={pokemon} onChange={(e) => setPokemon(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleTrainerSubmit} className="btn btn-add">Add the trainer</button>
      </div>

      {/* Render Trainerdirectory list component */}
      <TrainerDirectoryList trainers={trainers} loading={loading} handleTrainerRemove={handleTrainerRemove} />

      {/* Show reset button if list contains at least one trainer */}
      {trainers.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Reset trainers list.</button>
      )}
    </>
  )
}