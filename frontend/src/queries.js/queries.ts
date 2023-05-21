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
export {GET_Classes,GET_Subjects}