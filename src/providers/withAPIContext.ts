import { withContext, compose } from "recompose";
import * as PropTypes from "prop-types";
import withData from "./withData";
import whileLoading from "./whileLoading";

export const APIPropTypes = {
    data: PropTypes.object,
};

export interface APIContext {
    data: {
        name: string;
        weight: number;
        moves: {
            move: {
                name: string;
            }
        }[];
    };
}

const context = withContext<APIContext, APIContext>(
    APIPropTypes,
    ({data}) => ({
        data,
    })
);

export default compose(
    withData,
    whileLoading,
    context,
);
