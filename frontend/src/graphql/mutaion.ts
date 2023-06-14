import { gql } from "@apollo/client";

//mutation
const LOGIN_Student = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      name
      email
      std
      stdID
      isAdmin
      token
      
    }
  }
`;
const LOGOUT_Student = gql`
  mutation login($email: String!) {
    logout(email: $email) {
      name
      email
    }
  }
`;
const ADD_Student = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $std: String!) {
    addUser(name: $name, email: $email, password: $password, std: $std) {
      name
      email
    }
  }
`;

const ADD_Class = gql`
  mutation addClass($class: Int!){
    addClass(class: $class){
      id
    }
  }
`;

const ADD_Subject = gql`
  mutation addSubject($id: ID!,$subject: String!){
    addSubject(id: $id,subject: $subject){
      id
    }
  }
`;

const ADD_Vedio = gql`
  mutation addVedio($id: ID!,$title: String!,$description: String,$url: String!){
    addVedio(id: $id,title: $title,description: $description,url: $url){
      id
    }
  }
`;
export { LOGIN_Student,ADD_Student, ADD_Class, ADD_Subject,ADD_Vedio ,LOGOUT_Student}