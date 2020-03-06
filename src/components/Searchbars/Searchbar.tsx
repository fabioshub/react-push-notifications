import React from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

type p = {
    text?: string,
    type?: string,
    name?: string,
    icon?: string
};

const Searchbar = (props: React.PropsWithChildren<p>): JSX.Element => {
    const { icon, text, type, name } = props;
    const renderIcon = (): JSX.Element => {
        return <span className='pc-searchbar-icon'>{icon}</span>;
    };

    return <div className='pc-searchbar-container'><input className='pc-searchbar' type={type} name={name} /><button className='pc-searchbar-button'>Click</button></div>;
};

export default Searchbar;