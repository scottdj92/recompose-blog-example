import * as React from "react";
import { withData, whileLoading } from "../providers";
import { compose } from "recompose";
import { List, ListItem } from "./style";

interface StateProps {
    data: {
        moves: {
            move: {
                name,
            }
        }[];
    }
}

export default compose<StateProps, {}>(
    withData,
    whileLoading,
)(({
    data: {
        moves,
    }
}) => (
    <List>
        {
            moves.map( (move, index) => <ListItem key={index}>{move.move.name}</ListItem>)
        }
    </List>
));
