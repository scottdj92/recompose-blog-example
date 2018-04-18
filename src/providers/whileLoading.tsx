import { branch, renderComponent } from "recompose";
import Loader from "../loader";
import { APIContext } from "./withAPIContext";

const whileLoading = (WrappedComponent: React.ComponentType) => branch(
    (props: APIContext) => props.data === null,
    renderComponent(Loader),
)(WrappedComponent);

export default whileLoading;
