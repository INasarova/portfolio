import React from 'react';
import s from "./Skills.module.css";

function Skills() {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                {/*<div className={s.skillTitle}>*/}
                <span>Мои скиллы</span>

                <div className={s.lists}>
                    <div className={s.list}></div>
                    <div className={s.list}>
                        <div className={s.oneList}>

                        </div>
                        <div className={s.twoList}>

                        </div>
                    </div>
                    <div className={s.list} >
                        <div className={s.oneList}>

                        </div>
                        <div className={s.twoList}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;