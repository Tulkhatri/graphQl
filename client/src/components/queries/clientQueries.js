import { gql } from "@apollo/client"
const GET_CLIENTS = gql`
query getClients{
   clients{
    id 
    name
    email
    phone
   }
}
`
//export default GET_CLIENTS same default==={}
export{GET_CLIENTS}