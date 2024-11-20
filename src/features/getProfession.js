import axiosInstance from "../api/apiAiox"


export default async function getProfession() {
    const res = await axiosInstance.get("/professions")
    return res.data
}