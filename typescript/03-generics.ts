const dernier = <T>(tab: T[]): T | undefined => {
    return tab.at(-1);
}

const tab1 = [18, 5, 6]
const tab2 = ["max", "tati", "flore"]
console.log(dernier(tab1))
console.log(dernier(tab2))

interface ApiResponse<T> {
    data: T
    success: boolean
    message: string
}

const test1: ApiResponse<string> = {
    data: "Api",
    success: true,
    message: "bienvenue"
}

const test2: ApiResponse<number[]> = {
    data: [12,4,8],
    success: false,
    message: "liste de nombre"
}