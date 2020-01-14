import React, { Component } from 'react';

class ContactForm extends Component{
    render() {
        return(
            <div className="right">
                <div className="form">
                    <h1>Если хотите оставить отзыв? Напишите нам: </h1>
                    <form action="" className="form">
                        <div>
                            <p><span className="formTextRed">*</span> Фамилия:</p>
                            <input type="text" name="lastname" id="lastname"/>
                        </div>
                        <div>
                            <p><span className="formTextRed">*</span> Имя:</p>
                            <input type="text" name="firstname" id="firstname"/>
                        </div>
                        <div>
                            <p><span className="formTextRed">*</span> Email:</p>
                            <input type="text" name="email" id="email"/>
                        </div>
                        <div>
                            <p><span className="formTextRed">*</span> Номер телефона:</p>
                            <input type="text" name="phonenumber" id="phonenumber"/>
                        </div>
                        <div>
                            <p>Поставьте оценку заведению:</p>
                            <select name="point" id="point">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="2">3</option>
                                <option value="2">4</option>
                                <option value="2">5</option>
                            </select>
                        </div>
                        <div>
                            <p><span className="formTextRed">*</span> Ваш отзыв:</p>
                            <textarea rows="10" name="comment" id="comment"></textarea>
                        </div>
                        <div>
                            <input type="checkbox" name="confirm" id="confirm"/>
                            <p className="confirm"><span className="formTextRed">*</span> Не
                                возражаю против публикации моего отзыва на сайте.</p>
                        </div>
                        <div className="submit">
                            <input type="submit" value="Отправить"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default ContactForm;