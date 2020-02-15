import React, {Fragment} from "react";
import { Link } from "react-router-dom";

function list() {
    return(
        <ul>
            <Link to="/index.html">
                <li>
                    Главная
                </li>
            </Link>
            <Link to="/brands.html">
                <li>
                    Все бренды
                </li>
            </Link>
            <Link to="/search.html">
                <li>
                    Поиск
                </li>
            </Link>
            <Link to="/brand.html">
                <li>
                    Бренд
                </li>
            </Link>
            <Link to="/static-page.html">
                <li>
                    Внутренняя страница
                </li>
            </Link>
            <Link to="/category-page.html">
                <li>
                    Категория
                </li>
            </Link>
            <Link to="/product-page.html">
                <li>
                    Продукт
                </li>
            </Link>
        </ul>
    );
}

export default list;