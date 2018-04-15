import { branch, renderNothing, renderComponent } from "recompose";

const whileLoading = () => WrappedComponent => branch(
    (props) => props !== undefined,
    renderComponent(WrappedComponent),
);

export default whileLoading;
