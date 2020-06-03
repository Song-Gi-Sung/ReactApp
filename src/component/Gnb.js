import React from 'react';

const Gnb = () => (
    <ul className="gnb">
        <li>
            <a href = "/Main" className="tab_menu on">메인</a>
        </li>
        <li>
            <a href = "/Food" className="tab_menu">재고 관리</a>
        </li>
        <li>
            <a href = "/Emp" className="tab_menu">재고 관리</a>
        </li>
    </ul>
)

export default Gnb;