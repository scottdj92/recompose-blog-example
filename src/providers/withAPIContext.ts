import { withContext, compose } from "recompose";
import * as PropTypes from "prop-types";
import withData from "./withData";
import whileLoading from "./whileLoading";

export const APIPropTypes = {
    data: PropTypes.object,
};

export interface APIContext {
    data: any;
}

const context = withContext<APIContext, APIContext>(
    APIPropTypes,
    (props) => {
        console.log(props);
        return props;
    }
);

export default compose(
    withData,
    whileLoading,
    context,
);
