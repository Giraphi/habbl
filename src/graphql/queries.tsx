import {gql} from "@apollo/client";

export const mainPageContentsQuery = gql`
    {
        mainPageContents {
            introduction,
            image {
                url
            }
        }
    }
`;
