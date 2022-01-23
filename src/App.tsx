import React from 'react';
import styled from "styled-components";
import {gql, useQuery} from "@apollo/client";

const StyledRoot = styled.div`
    font-size: 50px;
`

const mainPageContentsQuery = gql`
    {
        mainPageContents {
            introduction,
            image {
                url
            }
        }
    }
`;


function App() {
    const { loading, error, data } = useQuery(mainPageContentsQuery);

    return (
        <StyledRoot>
            {data && data.mainPageContents[0].introduction}
            <img src={data && data.mainPageContents[0].image.url} alt={""}/>
        </StyledRoot>
    );
}

export default App;
