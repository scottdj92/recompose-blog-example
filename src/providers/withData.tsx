import axios, { AxiosRequestConfig } from "axios";
import * as React from "react";

const source = axios.CancelToken.source();

const config: AxiosRequestConfig = {
    baseURL: "https://pokeapi.co/api/v2/",
    cancelToken: source.token,
};

const client = axios.create(config);


const withData = (WrappedComponent: React.Component) => (
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null,
                error: "",
            }
        }

        async componentDidMount() {
            await client.get("generation/1")
                .then(response => this.setState({data: response.data}))
                .catch(e => this.setState({error: e}));
        }

        async componentWillUnmount() {
            // ensures that we cancel the API request if unmounted
            source.cancel();
        }

        render() {
            return (<WrappedComponent {...this.state} {...this.props}/>);
        }
    }
);

export default withData;
