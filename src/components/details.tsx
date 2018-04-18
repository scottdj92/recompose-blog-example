import * as React from "react";
import { usingApiContext } from "../providers";
import { Title } from "./style";

export default usingApiContext(({
    data: {
        name,
        weight,
    }
}) => (
    <>
        <Title>Pokemon: {name}</Title>
        <Title>Weight: {weight}</Title>
    </>
));
