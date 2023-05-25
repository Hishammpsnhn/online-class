import { gql } from "@apollo/client";

//mutation
const ADD_Student = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $std: String!) {
    addUser(name: $name, email: $email, password: $password, std: $std) {
      name
      email
      std
    }
  }
`;

const ADD_Class = gql`
  mutation addClass($class: Int!){
    addClass(class: $class){
      id
      class
    }
  }
`;
export { ADD_Student, ADD_Class }