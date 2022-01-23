import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const StyledRoot = styled.div``

function App() {
    const [ctr, setCtr] = useState(0);

    useEffect(() => {
        console.log(ctr);
    }, []);

    return (
        <StyledRoot>
            Hello
        </StyledRoot>
    );
}

export default App;
