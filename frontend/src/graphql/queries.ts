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
  query GetSubjects($id: ID!) {
    subjects(id: $id) {
      id
      subject
      videos
    }
  }
`;
const GET_Vedios = gql`
  query GetVedios($id: ID!) {
    vedios(id: $id) {
      id
      description
      title
      url
    }
  }
`;

export {GET_Classes,GET_Subjects,GET_Vedios}