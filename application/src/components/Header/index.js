import React, {Component} from 'react';
import './style.css';
import Logo from'../../img/food-icons-png-100.png'

class Header extends Component{
    render() {
        // document.querySelector('.carousel').setAttribute(interval : 2000);
        return(
            <header>
                <div>
                <div className="" id="home">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://images.wallpaperscraft.com/image/burger_hamburger_buns_meat_knife_116170_1280x720.jpg" alt="Первый слайд"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://images.wallpaperscraft.com/image/pizza_vegetables_sauce_82102_1280x720.jpg" alt="Второй слайд"/>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="http://s1.oboiki.net/uploads/images/others/2012/04/012ebec19fa400347d5eecde677d5d61/nezdorovaya-pishha-koka-kola-foto_1280x720.jpg" alt="Третий слайд"/>
                            </div>
                        </div>
                        {/*<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">*/}
                        {/*    <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                        {/*    <span className="sr-only">Previous</span>*/}
                        {/*</a>*/}
                        {/*<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">*/}
                        {/*    <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                        {/*    <span className="sr-only">Next</span>*/}
                        {/*</a>*/}
                    </div>
                    <div className="overflow">
                        <div className="my-burger">
                            <div className="my">
                            <img src={Logo} alt="logo"/>
                             <div className="burger">
                                 <h2>Сеть ресторанов</h2>
                                 <h1> "My Burger"</h1>
                             </div>
                            </div>
                        </div>
                        <p>При крупных неприятностях я отказываю себе во всем, кроме еды и питья.</p>
                    </div>
                </div>
                </div>
            </header>
        )
    }
}
export default Header;