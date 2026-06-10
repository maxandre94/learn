import { useState } from "react"

const Compteur = () => {

    const [compt, setCompt] = useState(0)

    return (
        <div className="p-5">
            <div className="p-2 mx-2">{ compt }</div>
            <button onClick={() => setCompt(compt+1)} className="p-2 rounded-4xl bg-green-500 text-white hover:bg-green-600 mx-2">+</button>
            <button onClick={() => setCompt(0)} className="p-2 rounded-2xl bg-red-500 text-white hover:bg-red-600">Réinitialise</button>
        </div>
    )
}

export default Compteur