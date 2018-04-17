import { branch, renderComponent } from "recompose";
import Loader from "../loader";
import { StateProps } from "../app";

const whileLoading = (WrappedComponent: React.ComponentType) => branch(
    (props: StateProps) => props.data === null,
    renderComponent(Loader),
)(WrappedComponent);

export default whileLoading;
