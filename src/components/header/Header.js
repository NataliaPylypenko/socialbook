import React from 'react';
import c from './Header.module.scss'

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>socialbook</div>
        </header>
    )
};

export default Header;