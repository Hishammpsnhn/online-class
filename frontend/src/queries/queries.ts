import { gql } from "@apollo/client";

const GET_Classes = gql`
  query GetClasses {
    classes{
        id,
       class
      }
  }
`;
const GET_Subjects = gql`
  query GetSubjects($id: Int!) {
    subjects(id: $id) {
      id
      name
      url
    }
  }
`;
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
export {GET_Classes,GET_Subjects,ADD_Student}