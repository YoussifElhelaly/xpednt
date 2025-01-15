import { atom } from "recoil";

const selectLoupeAtom = atom({
    key:"selectLoupeAtom",
    default: {
        id:0 ,
        name : ""
    }
})

export default selectLoupeAtom