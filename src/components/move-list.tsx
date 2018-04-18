import * as React from "react";
import { usingApiContext } from "../providers";
import { List, ListItem } from "./style";

export default usingApiContext(({
    data: {
        moves,
    }
}) => (
    <List>
        {
            moves.map( (move, index) => <ListItem key={index}>{move.move.name}</ListItem>)
        }
    </List>
))
