import * as React from "react";
import { compose, withProps } from "recompose";
import withData from "./withData";
import whileLoading from "./whileLoading";

interface StateProps {
    data: any;
}

export default compose<StateProps, {}>(
    withData,
    // whileLoading,
)(({data}) => {
    console.log(data);
    return <div>pokemon</div>
})
