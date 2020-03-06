import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

type p = {
    backgroundColor: string,
    color?: string,
    icon?: JSX.Element,
    size?: string,
    variant?: string,
    border?: string,
    fontSize?: string,
    fontWeight?: number,
    onClick?: any
};

const borderStyle: p = {
    backgroundColor: 'white',
    size: '10px',
    color: 'rgb(76, 228, 177)',
    fontSize: '10px',
    border: '0',
    fontWeight: 1500
};

const Button = (props: React.PropsWithChildren<p>): JSX.Element => {
    const { backgroundColor, color, icon, variant, border, fontSize, onClick } = props;
    console.log(props);
    let style: p = {
        backgroundColor: backgroundColor,
        color: color,
        border: '0',
        fontSize: fontSize
    };
    if (variant === 'light') {
        style = borderStyle;
    }
    if (border) {
        style.border = '2px solid aquamarine';
    }
    const renderIcon = (): JSX.Element => {
        return <span className='pc-button-icon'>{icon}</span>;
    };
    return <button onClick={onClick} className='pc-button' style={style}>{props.children} {icon && renderIcon()}</button>;
};

Button.defaultProps = {
    backgroundColor: 'aquamarine',
    size: '10px',
    color: 'black',
    padding: '5px 10px 8px',
};

Button.propTypes = {
    variant: PropTypes.oneOf(['default', 'light']),
    border: PropTypes.oneOf([true, false])
};

export default Button;