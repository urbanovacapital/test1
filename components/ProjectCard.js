'use client';
import { useState } from 'react';

export default function ProjectCard({ project }) {
  const [investment, setInvestment] = useState(0);
  const progressPercentage = (project.investedCapital / project.totalInvestment) * 100;

  const handleInvestmentChange = (e) => {
    const value = parseFloat(e.target.value);
    setInvestment(value);
  };

  return (
    <div className="card">
      <h2>{project.name}</h2>
      <img src={project.image} alt="Imagen del proyecto" />
      <p>{project.description}</p>
      <h3>Ubicación: {project.location}</h3>
      <p>Inversión Total: {project.totalInvestment} €</p>
      <p>Capital Recaudado: {project.investedCapital} €</p>
      <div className="progress-bar">
        <div className="progress-bar-filled" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <p>{progressPercentage.toFixed(2)}% del capital cubierto</p>
      <input type="number" value={investment} onChange={handleInvestmentChange} placeholder="¿Cuánto deseas invertir?" />
      <p>Faltan {(project.totalInvestment - (investment + project.investedCapital)).toLocaleString()} € para cerrar el proyecto</p>
      <button>Invertir</button>
    </div>
  );
}