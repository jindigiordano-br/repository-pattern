// Import deps
import React from 'react'

// Create interfaces
interface TrainerDirectoryListRowUI {
  position: number;
  trainer: {
    id: number;
    name: string;
    element: string;
    city: string;
    favorite: string;
  }
  handleTrainerRemove: (id: number, element: string) => void;
}

// Create TrainerDirectoryListRow component
export const TrainerDirectoryListRow = (props: TrainerDirectoryListRowUI) => (
  <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>

    <td className="table-item">
      {props.trainer.name}
    </td>

    <td className="table-item">
      {props.trainer.element}
    </td>

    <td className="table-item">
      {props.trainer.city}
    </td>

    <td className="table-item">
      {props.trainer.favorite}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => props.handleTrainerRemove(props.trainer.id, props.trainer.element)}>
        Remove trainer
      </button>
    </td>
  </tr>
)