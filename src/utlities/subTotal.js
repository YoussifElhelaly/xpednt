

export default function CalcPrice(name , arr) {

    for (const element of arr) {
        if(element.name == name) {
            return Math.round(element.price)
        }
    }
    return 0
}

