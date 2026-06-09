const attendreEtRetourner = (message) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            message ? resolve(message) : reject('erreur!');
        }, 1000)
    })
}

// attendreEtRetourner('valide!').then((result) => {
//     console.log('Resultat: ',result)
// }).catch((err) => {
//     console.log('erreur: ',err)
// })

const main = async () => {
    try {
        const resultat = await attendreEtRetourner('valide!')
        console.log(resultat)
    } catch (err) {
        console.error("Une erreur est survenue :", err);
    }
}

main()