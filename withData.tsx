import axios, { AxiosRequestConfig } from "axios";
import * as React from "react";

const config: AxiosRequestConfig = {
    baseURL: "https://pokeapi.co/api/v2/"
};

const client = axios.create(config);

const withData = (WrappedComponent: React.Component) => (
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: {},
                error: {},
            }
        }

        async componentDidMount() {
            await client.get("pokemon/charmander")
                .then(response => this.setState({data: response.data}))
                .catch(e => this.setState({error: e}));
        }

        render() {
            return <WrappedComponent {this.state} {...this.props}/>
        }
    }
);

export default withData;
