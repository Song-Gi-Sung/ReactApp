import React from 'react';

const Gnb = () => (
    <ul className="gnb">
        <li>
            <a href = "/" className="tab_menu on">순수익</a>
        </li>
        <li>
            <a href = "/Food" className="tab_menu">재고 관리</a>
        </li>
        <li>
            <a href = "/Emp" className="tab_menu">직원 관리</a>
        </li>
        <li>
            <a href = "/NewFood" className="tab_menu">입고 예정</a>
        </li>
    </ul>
)

export default Gnb;