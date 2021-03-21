import React from 'react';
import { ApplicationFacade } from './puremvc';

import './App.css';
import Login from './Login';
import { Spin } from 'antd';

class App extends React.PureComponent {
    constructor(props: any) {
        super(props);
        const facade = ApplicationFacade.getInstance();
        facade.startup(this);
        // console.log('app constructor');
    }

    state = {
        loading: true,
    };

    componentDidMount() {
        // TODO: ...
        // console.log('app componentDidMount');
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
                <Spin tip="Loading..." spinning={loading}>
                    <div style={{ width: '300px' }}>
                        <Login />
                    </div>
                </Spin>
            </div>
        );
    }
}

export type APP = typeof App;
export default App;
