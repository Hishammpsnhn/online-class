import { gql } from "@apollo/client";

//mutation
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
      class
    }
  }
`;

const ADD_Subject = gql`
  mutation addSubject($id: ID!,$subject: String!){
    addSubject(id: $id,subject: $subject){
      id
      subject
    }
  }
`;

const ADD_Vedio = gql`
  mutation addVedio($id: ID!,$title: String!,$description: String,$url: String!){
    addVedio(id: $id,title: $title,description: $description,url: $url){
      id
      description
      title
      url
    }
  }
`;
export { ADD_Student, ADD_Class, ADD_Subject,ADD_Vedio }