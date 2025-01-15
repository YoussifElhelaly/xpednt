import axiosInstance from "../api/apiAiox"


export default async function getLight() {
     const res = await axiosInstance.get("/loupesAndLight")
        return res.data
}