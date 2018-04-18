import { getContext } from "recompose";
import { APIContext, APIPropTypes } from "./withAPIContext";

export default getContext<APIContext>(APIPropTypes);
