import { atom } from "recoil";
import getModels from "../features/getModels";


const modelsPriceAtom = atom({
    key : "modelsPriceAtom", 
    default: await getModels()
})

export default modelsPriceAtom