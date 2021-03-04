import * as pokedex from "./pokedex.json"
import {fromTraversable, Lens, Traversal} from "monocle-ts"
import {array} from "fp-ts/lib/Array"

interface Names {
    readonly english: string
    readonly japanese: string
    readonly chinese: string
    readonly french: string
}

interface Base {
    readonly HP: number
    readonly Attack: number
    readonly Defense: number
    readonly "Sp. Attack": number
    readonly "Sp. Defense": number
    readonly Speed: number
}

interface Pokemon {
    readonly id: number
    readonly name: Names
    readonly type: string[]
}

const names = Lens.fromProp<Pokemon>()('name')
const french = Lens.fromProp<Names>()('french')
const traversal = fromTraversable(array)<Pokemon>()

console.log(names.composeLens(french).modify(s => "Le " + s)(pokedex[0]))
console.log(traversal.composeLens(names).composeLens(french).modify(s => "Le " + s)(pokedex))

