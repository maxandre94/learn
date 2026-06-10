import Compteur from "./components/Compteur"
import ProfilCard from "./components/ProfilCard"

const App = () => {
  return (
    <>
      <ProfilCard nom="Adjoua Max andré" metier="Developpeur" githubUrl="https://github.com/maxandre94" technologies={["Git", "React", "Tailwind"]} />
      <Compteur />
    </>
  )
}

export default App