import React from 'react';

import s from "./Main.module.css";

import '../App.css';

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
            <div className={s.greeting}>
                <span>Привет!</span>
                <span>Меня зовут Ирина.</span>
                <span>Я front-end разработчик.</span></div>
                <div className={s.photo}>img</div>
            </div>

        </div>

    );
}

export default Main;
