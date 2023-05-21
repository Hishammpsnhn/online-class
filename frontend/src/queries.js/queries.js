import { gql } from "@apollo/client";

const GET_Classes = gql`
  query GetClasses {
    classes{
        id,
       class
      }
  }
`;
export {GET_Classes}