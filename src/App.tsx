import React from 'react';
import { ApplicationFacade } from './puremvc';

import './App.css';
import Login from './Login';
import { Spin } from 'antd';

type AppState = {
    loading: boolean;
};

class App extends React.PureComponent<any, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            loading: true,
        };
        // console.log('app constructor');
    }

    componentDidMount() {
        console.log('App componentDidMount');
        const facade = ApplicationFacade.getInstance();
        facade.startup(this);
        this.hiddenLoading();
    }

    hiddenLoading = () => {
        this.setState({ loading: false });
    };

    render() {
        const { loading } = this.state;

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '150px',
                }}
            >
                {loading ? (
                    <Spin tip="Loading..." />
                ) : (
                    <div style={{ width: '300px' }}>
                        <Login />
                    </div>
                )}
            </div>
        );
    }
}

export type APP = typeof App;
export default App;
