import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const exampleProject = {
    name: 'Apartamento de lujo en el centro de Valencia',
    description: 'Apartamento de 120 m² en el corazón de Valencia, con 3 habitaciones, 2 baños y vistas espectaculares.',
    image: '/images/apartment.jpg',
    location: 'Calle Ficticia 123, Valencia',
    totalInvestment: 300000,
    investedCapital: 150000,
  };

  return (
    <div className="container">
      <h1>Bienvenido a Urbanova Capital</h1>
      <ProjectCard project={exampleProject} />
    </div>
  );
}