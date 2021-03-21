import React from 'react';
import './App.css';
import Login from './Login';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '150px',
            }}
        >
            <div style={{ width: '300px' }}>
                <Login />
            </div>
        </div>
    );
}

export default App;
