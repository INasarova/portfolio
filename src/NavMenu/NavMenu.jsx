import React from 'react';
import s from './NavMenu.module.css';


function NavMenu() {
    return (

                <div className={s.navMenu}>
                    <a href="" className={s.link}>главная</a>
                    <a href="" className={s.link}>скиллы</a>
                    <a href="" className={s.link}>проекты</a>
                    <a href="" className={s.link}>контакты</a>
                </div>


    );
}

export default NavMenu;