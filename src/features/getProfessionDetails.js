import axiosInstance from "../api/apiAiox";

export default async function getProfDetails(id) {
    let res = await axiosInstance.get(`/professions/${id}`)
    return res.data
}