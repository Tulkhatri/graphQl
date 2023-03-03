import { gql } from "@apollo/client"
const ADD_CLIENT = gql`
mutation addclient($name:String!,$email:String!,$phone:String!){
   addClient(name:$name,email:$email,phone:$phone){
      id
      name
      email
   }
}`
const DELETE_CLIENT = gql`
mutation deleteClient($id:ID!){
   deleteClient(id:$id){
    id
    name
    email
    phone
   }
}`;
// export default DELETE_CLIENT;//default replaced by {}and also need to import within{}
export { DELETE_CLIENT, ADD_CLIENT };