const getKeys = (obj) => Object.keys(obj)

const getValues = (obj) => Object.values(obj)

function logObj (obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`)
    }
}

const getAvarge = (obj) => Object.values(
    obj).reduce(
        (acc, value) => acc + value,
         0
        ) / Object.values(obj).length


const mergeObjs = (obj1, obj2) => Object.assign(obj1, obj2)

const hasThisKey = (obj, key) => Object.hasOwn(obj, key)

const config = {name: 'Hallel', birthYear: 2003}
Object.freeze(config)

function arrToObj (arr) {
    const result = {}
    for (const a of arr) {
        result[a[0]] = a[1]
    }
    return result
}

const reducePrice = obj => Object.fromEntries(
    Object.entries(obj).map(
    ([key, price]) => [key, price-(price*0.10)])
    )

const getNaNFields = obj => Object.fromEntries(
    Object.entries(obj).filter(
        ([key, value]) => {
            if (typeof(value) !== 'number') return ([key, value])
        }
    ))

const getSafeCopy = obj => structuredClone(obj)

const hasSameKeys = (obj1, obj2) => Object.keys(obj1) === Object.keys(obj2)

const hasSameKeys = (obj1, obj2) => {
    const keys = {
        keys1: Object.keys(obj1),
        keys2: Object.keys(obj2)
    }
    if (keys.keys1.length !== keys.keys2.length) {
        return false
    }
    return keys.keys1.every((key, index) => key === keys.keys2[index])
}