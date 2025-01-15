export default function carbonPrice (loupe , isLight) {
    let price = 0 
    if (isLight) {
        switch (loupe) {
            case "3.5X":
                price = 1596  
                break;
            case "4.5X":
                price = 1680  
                break;
            case "5.5X":
                price = 1740 
                break;
            case "6.5X":
                price = 1800 
                break;
            default:
                break;
        }
    } else {
        
    
    switch (loupe) {
        case "3.5X":
            price = 996  
            break;
        case "4.5X":
            price = 1080  
            break;
        case "5.5X":
            price = 1140 
            break;
        case "6.5X":
            price = 1200 
            break;
        default:
            break;
    }
}

return price

}