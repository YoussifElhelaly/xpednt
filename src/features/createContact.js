import { toast } from "sonner";
import axiosInstance from "../api/apiAiox";

export default async function createContact(e ,country) {
    e.preventDefault()
    let fd = new FormData(e.target)
    fd.delete("phoneCountry")
    fd.append("country_code" , country.dialCode) 
    let res = await axiosInstance.post("/leads" , fd)
    if(res.response?.data.errors) {
        let result = Object.values(res.response?.data.errors)
        result.forEach((mess)=>{
            toast.error(mess)
        })
    
    } else {
        e.target.reset()
        toast.success("We will Contact with you as soon as possible")
        return true
    }
}