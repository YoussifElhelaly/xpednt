import { atom } from "recoil";

const selectLightAtom = atom({
    key:"selectLightAtom",
    default: {
        id:0,
        name :""
    }
})

export default selectLightAtom