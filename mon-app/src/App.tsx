import Compteur from "./components/Compteur"
import ProfilCard from "./components/ProfilCard"
import UtilisateursGithub from "./components/UtilisateursGithub"

const App = () => {
  return (
    <>
      <ProfilCard nom="Adjoua Max andré" metier="Developpeur" githubUrl="https://github.com/maxandre94" technologies={["Git", "React", "Tailwind"]} />
      <Compteur />
      <UtilisateursGithub />
    </>
  )
}

export default App