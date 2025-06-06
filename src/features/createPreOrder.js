import { toast } from "sonner";
import axiosInstance from "../api/apiAiox";

export default async function createPreOrder(e, modelDetails) {
    let fd = new FormData(e.target)
    fd.append("frameName" , modelDetails.frameName)
    fd.append("frameColor" , modelDetails.frameColor)
    fd.append("loopName" , modelDetails.loupeName)
    fd.append("loopColor", modelDetails.loupeColor)
    fd.append("lightName", modelDetails.lightName) 
    let res = await axiosInstance.post("/requestLead", fd)
    console.log(res)
    if (res.response?.data.errors) {
        let result = Object.values(res.response?.data.errors)
        result.forEach((mess) => {
            toast.error(mess)
        })
    } else {
        e.target.reset()
        toast.success("We will Contact with you as soon as possible")
        return true
    }
}