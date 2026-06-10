const ProfilCard = ({ nom, metier, githubUrl, technologies }: { nom: string, metier: string, githubUrl: string, technologies: string[]}) => {
  return (
    <div className="p-5">
      <h1 className="text-blue-500 text-3xl">{ nom }</h1>
      <h2 className="p-1">{ metier }</h2>
      <p className="p-1">Liste de technologies</p>
      <ul className="p-2">
        {technologies.map((technologie,i) => <li key={i}>{technologie}</li>)}
      </ul>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white p-2">Mon Github</a>
    </div>
  )
}

export default ProfilCard