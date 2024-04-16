import React, { useState } from "react";
import TaskRow from "../taskRow/TaskRow";
import TaskModal from "../taskModal/taskModal"; 
import "../../styles/main.css";
import "./ToDo.css";
import { useTask } from "../../context/TaskContext";
import Loading from "../loading/Loading";

const ToDo = () => {
  const { tasks, loading } = useTask();

  // Añade un estado para controlar si el modal de agregar tareas está abierto o cerrado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <div>
        <button onClick={openModal}>Añadir tarea</button>
      </div>
      {loading ? (
        <Loading /> // Show loading component when tasks are loading
      ) : tasks.length > 0 ? (
        tasks.map((task) => <TaskRow key={task.id} task={task} />)
      ) : (
        <div>
          <p>No hay tareas listadas</p>
        </div>
      )}

      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToDo;