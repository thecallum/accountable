import React from "react"
import Styled from "styled-components"

const Container = Styled.div`
    margin: 30px auto;
    max-width: 800px;
    width: calc(100% - 60px);
    padding: 30px;
    background-color: #eee;

    box-sizing: border-box;

`

export default ({ children }) => <Container>{children}</Container>
