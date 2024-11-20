import axiosInstance from "../api/apiAiox"


export default async function getErgo() {
     const res = await axiosInstance.get("/ergonomics")
        return res.data
}