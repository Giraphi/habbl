import React, {useState} from 'react';
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {mainPageContentsQuery} from "./graphql/queries";
import ThreeCanvas from "./three-canvas";

const StyledRoot = styled.div`
    font-size: 50px;
`

function App() {
    const { data } = useQuery(mainPageContentsQuery);

    const [ctr, setCtr] = useState(0);

    return (
        <StyledRoot>
            {data && data.mainPageContents[0].introduction}
            <button onClick={() => setCtr(x => x+1)}>click</button>
            {/*<img src={data && data.mainPageContents[0].image.url} alt={""}/>*/}
            <ThreeCanvas/>
            {data && data.mainPageContents[0].introduction}{" "}
            {data && data.mainPageContents[0].introduction}
        </StyledRoot>
    );
}

export default App;
