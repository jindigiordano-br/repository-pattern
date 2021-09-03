// Import deps
import React from 'react'

// Import components
import { TrainerDirectoryListRow } from './trainerdirectory-list-row'

// Import styles
import './../styles/trainerdirectory-list.css'

// Create interfaces
interface TrainerUI {
  id: number;
  name: string;
  element: string;
  city: string;
  pokemon: string;
}

interface TrainerDirectoryListUI {
  trainers: TrainerUI[];
  loading: boolean;
  handleTrainerRemove: (id: number, title: string) => void;
}

// Create TrainershelfList component
export const TrainerDirectoryList = (props: TrainerDirectoryListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
      <thead>
      <tr>
        <th className="table-head-item" />

        <th className="table-head-item">Name</th>

        <th className="table-head-item">Element</th>

        <th className="table-head-item">City</th>

        <th className="table-head-item">Pokemon</th>

        <th className="table-head-item" />
      </tr>
      </thead>

      <tbody className="table-body">
      {props.trainers.length > 0 ? (
        props.trainers.map((trainer: TrainerUI, idx) => (
            <TrainerDirectoryListRow
              key={trainer.id}
              trainer={trainer}
              position={idx + 1}
              handleTrainerRemove={props.handleTrainerRemove}
            />
          )
        )
      ) : (
        <tr className="table-row">
          <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no trainers to show. Create one!</td>
        </tr>
      )
      }
      </tbody>
    </table>
  )
}