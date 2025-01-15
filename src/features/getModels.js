import axiosInstance from "../api/apiAiox"


export default async function getModels() {
    const res = await axiosInstance.get("/model3d")
    return res.data
}