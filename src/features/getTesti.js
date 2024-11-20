import axiosInstance from "../api/apiAiox"


export default async function getTesti() {
    const res = await axiosInstance.get("/testimonials")
    return res.data
}