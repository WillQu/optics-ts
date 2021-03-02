import * as pokedex from "./pokedex.json"
import { Lens } from "monocle-ts"

interface Names {
    english: string
    japanese: string
    chinese: string
    french: string
}

const french = Lens.fromProp<Names>()('french')

interface Base {
    HP: number
    Attack: number
    Defense: number
    "Sp. Attack": number
    "Sp. Defense": number
    Speed: number
}

interface Pokemon {
    id: number
    name: Names
    type: string[]
}

const names = Lens.fromProp<Pokemon>()('name')

const pokemon: Pokemon = pokedex[0]
console.log(names.compose(french).get(pokemon))
console.log(names.compose(french).modify(s => "Le " + s)(pokemon))

