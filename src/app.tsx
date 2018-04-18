import * as React from "react";
import { Wrapper } from "./style";
import MoveList from "./components/move-list";
import { withApiContext } from "./providers";
import Details from "./components/details";

export default withApiContext(() => (
    <Wrapper>
        <Details/>
        <MoveList/>
    </Wrapper>
))
