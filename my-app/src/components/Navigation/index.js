import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/food-icons-png-100.png';
import './style.css';
import $ from 'jquery'


class Navigation extends Component{
    handleCLick(e){
        e.preventDefault();
        let links = document.querySelectorAll('.navigation-link');
        links.forEach(item =>{item.classList.remove('active')})
        e.target.parentNode.classList.add('activve')
        let name = window.location.pathname;
        let _href = e.target.href.split('#');
        if(name!=='/') window.location.assign(`/#${_href[1]}`);
        $('html, body').animate({
            scrollTop: $($.attr(e.target,'href')).offset().top-200
        },500)

    }
    render() {
        const {pathname} = window.location.pathname;
        console.log(pathname)
        return(
            <nav className='navigation'>
                <ul>

                        <li className={pathname=='/food'?'active navigation-link':'navigation-link'} >
                            <Link to='/food'>
                            Меню
                            </Link>
                        </li>

                        <li className="navigation-link">
                            <Link to='/stocks'>
                                Акции
                            </Link>
                        </li>
                        <li className="navigation-link">
                            <Link to='/'>
                                <img src={logo} alt="Logotype"/>
                            </Link>
                        </li>
                    <li className={pathname=='/#aboutUs'?'navigation-link active':'navigation-link'}><a onClick={(e)=>this.handleCLick(e)}  href="#aboutUs" >О нас</a></li>
                    <li className="navigation-link"><a onClick={(e)=>this.handleCLick(e)} href="#contacts" className={pathname=='/#contacts'?'active':''}>Контакты</a></li>
                </ul>
            </nav>
        )
    }
}
export default Navigation;