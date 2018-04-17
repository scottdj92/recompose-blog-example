import * as React from "react";
import { compose, withProps } from "recompose";
import withData from "./providers/withData";
import whileLoading from "./providers/whileLoading";
import { Wrapper, Title } from "./style";

export interface StateProps {
    data: {
        name: string;
        weight: number;
    };
}

export default compose<StateProps, {}>(
    withData,
    whileLoading,
)(({
    data: {
        name,
        weight,
    }
}) => (
        <Wrapper>
            <Title>pokemon: {name}</Title>
            <Title>weight: {weight}</Title>
        </Wrapper>
    ),
);
