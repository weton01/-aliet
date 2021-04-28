import axios from "axios";


async function getResponse() {
  const response  = await axios.post(
    "http://a31737bad75234fe6bae73eb0ac3cbd5-2fe573630c3fe1a0.elb.sa-east-1.amazonaws.com/api/users/signup",
    {
      "email": "wellington_ferreira260@hotmail.com",
      "password": "Dragonite1@",
      "name": "Wellington",
      "last_name": "Campana Ferreira",
      "cpf": "43123194809"
    }
  );


  console.log('response: ',  response)
}


getResponse()