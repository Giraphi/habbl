import React from 'react';
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {mainPageContentsQuery} from "./graphql/queries";
import ThreeCanvas from "./three-canvas";

const StyledRoot = styled.div`
    font-size: 50px;
`

function App() {
    const { data } = useQuery(mainPageContentsQuery);

    return (
        <StyledRoot>
            {data && data.mainPageContents[0].introduction}
            {/*<img src={data && data.mainPageContents[0].image.url} alt={""}/>*/}
            <ThreeCanvas/>
            {data && data.mainPageContents[0].introduction}{" "}
            {data && data.mainPageContents[0].introduction}
        </StyledRoot>
    );
}

export default App;
