import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import Header from './components/Header'; // Adjust the path as needed
import Body from './compnents/Body';

const AppLayout = ()=>{
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);