import React from 'react';
import s from './Navbar.module.css';

// у нас есть объект classes,
// имя которого можно написать любое 
// назову его коротко: s

// let classes = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
// }

// в котором свойствами являются названия наших тегов и классов
// а значением является уникальный сгенерированный класс

const Navbar = () => {
    // здесь обращаюсь к свойству объекта classes
    // по имени тега nav
    // className={classes.nav}
    return (
        <nav className={s.nav}>
            {/* указала в ссылках путь к созданным страницам profile & dialogs */}
            {/* ссылки стали кликабельными в навигационной панели */}
            <div className={s.item}><a href='/profile'>Profile</a></div>
            <div className={s.item}><a href='/dialogs'>Message</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;