const db = await Deno.openKv()


// const lisPreferences = {
//     username: "lisBolivar",
//     theme: "light",
//     language: "es-PE"
// }

// const junPreferences = {
//     username: "juvargas",
//     theme: "light",
//     language: "es-PE"
// }

// await db.set(["preferences", "lis"], lisPreferences)
// await db.set(["preferences", "jun"], junPreferences)

//lectura 1
// const lisPref = await db.get(["preferences", "lis"])
// const junPref = await db.get(["preferences", "jun"])
// console.log(lisPref)
// console.log(junPref)

//lectura 2
// const [ lisPref, junPref] = await db.getMany([["preferences", "lis"], ["preferences", "jun"]])
// console.log(lisPref)
// console.log(junPref)

//lectura 3
const entries = db.list({ prefix: ["preferences"]})

for await (const entry of entries) {
    console.log(entry)
}




/* //visitas
//await db.set(["visits"], new Deno.KvU64(0n))
await db
.atomic().sum(["visits"], 1n).commit()

const result = await db.get<Deno.KvU64>(["visits"])
console.log(result.value)
*/


/* //contador
// const result = await db.set(["counter"], 0)
const { value } = await db.get<number>(["counter"])
const newCounter = value == null ? 0 : value + 1

const result = await db.set(["counter"], newCounter)

console.log(newCounter)
console.log(result)
*/


/* //username
const user = 'jun'
const result = await db.set(["username"], user)
console.log(result)

const username = await db.get(["username"])
console.log(username)
*/