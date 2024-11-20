import { toast } from "sonner";
import axiosInstance from "../api/apiAiox";

export default async function createContact(e) {
    e.preventDefault()
    let fd = new FormData(e.target)
    // let phoneNumber = fd.get("phoneCountry")
    // fd.append("country_code" , phoneNumber.split(" ")[0])
    // fd.append("phone" , phoneNumber.split(" ")[1])
    fd.delete("phoneCountry")
    let res = await axiosInstance.post("/leads" , fd)

    if(res.response?.data.errors) {
        let result = Object.values(res.response?.data.errors)
        result.forEach((mess)=>{
            toast.error(mess)
        })
    } else {
        toast.success("Created Successfully")
        return true
    }
}