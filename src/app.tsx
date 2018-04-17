import * as React from "react";
import { compose, withProps } from "recompose";
import withData from "./providers/withData";
import whileLoading from "./providers/whileLoading";
import { Wrapper, Title } from "./style";
import MoveList from "./components/move-list";

export interface StateProps {
    data: {
        name: string;
        weight: number;
    };
}

export default compose<StateProps, {}>(
    withData,
    whileLoading,
)((props) => {
    console.log(props);
    return (
        <Wrapper>
            <Title>pokemon: {props.data.name}</Title>
            <Title>weight: {props.data.weight}</Title>
            <MoveList/>
        </Wrapper>
    );
});
