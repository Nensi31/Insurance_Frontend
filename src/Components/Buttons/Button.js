import React from 'react';
import { Button } from 'antd';
import './Button.scss';

const CustomButton = props => {
    return (
        <div className="btn-custom">
            <Button {...props}>{props.title}</Button>
        </div>
    );
};

export default CustomButton;
