/* You are building a shipping application. Write a program that takes the type of package ("standard",
"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight"
would be delivered the next day. */

let packeges = "standard";
switch (packeges) {
        case "standard":
        console.log("Delivery time might take 3-5 days."); 
        break;
        case "express":
            console.log("Delivery time might take 1-2 days."); 
            break;
            case "overnight":
            console.log("product would be delivered the next day.");
            break;

    default:
        console.log(" Delivery Successful.");
        break;
}