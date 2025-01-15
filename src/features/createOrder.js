import { toast } from "sonner";
import axiosInstance from "../api/apiAiox";

export default async function createOrder(e , modelDetails) {
  
    let fd = new FormData(e.target)
    fd.append("frame" , modelDetails.frame.name)
    fd.append("frame_color" , modelDetails.frameColor)
    fd.append("loupe" , modelDetails.loupe.name)
    fd.append("loupe_color" , modelDetails.loupeColor)
    fd.append("light" , modelDetails.light.name)
    let res = await axiosInstance.post("/orders" , fd)
    if(res.response?.data.errors) {
        let result = Object.values(res.response?.data.errors)
        result.forEach((mess)=>{
            toast.error(mess)
        })
    } else {
        e.target.reset()
        toast.success("Your Order Is created Successfully")
        return true
    }
}