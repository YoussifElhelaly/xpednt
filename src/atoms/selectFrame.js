import { atom } from "recoil";

const selectFrameAtom = atom({
    key:"selectFrameAtom",
    default: {
        id:1,
        name:"Albert"
    }
})

export default selectFrameAtom