// Import or define your icons as needed
import apstaIcon from "/public/logos/apsta.png"; // Replace with the actual icon path
import restaurantIcon from "/public/logos/cerdotola.png";
import comifacIcon from "/public/logos/comifac.png";


const instruments = [
    {
      id:"1",
      position: [3.86667, 11.51667],
      name: "APSTA",
      icon: apstaIcon,
      financials: "$500k Annual Budget",
      engagementFinancier: "Oui",
      address: "123 APSTA Avenue, Yaoundé, Cameroon",
      contact: "+237 654 321 098",
    },
    {
        id:"2",
      position: [3.86670, 11.53667],
      name: "CERDOTOLA",
      icon: restaurantIcon,
      financials: "$1.2M Annual Budget",
      engagementFinancier: "Non",
      address: "45 CERDOTOLA Street, Yaoundé, Cameroon",
      contact: "+237 654 987 654",
    },
    {
        id:"3",
      position: [3.86673, 11.55667],
      name: "COMIFAC",
      icon: comifacIcon,
      financials: "$2.1M Annual Budget",
      engagementFinancier: "Oui",
      address: "78 COMIFAC Road, Yaoundé, Cameroon",
      contact: "+237 654 123 456",
    },
  ];
  
  export default instruments;


  