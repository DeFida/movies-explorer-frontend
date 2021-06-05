import './Profile.css';

function Profile() {
    return (
    <div className="profile">
        <div className="profile__info-wrapper">
            <h1 className="profile__heading">Привет, Дастан</h1>
            <ul className="profile__list">
                <li className="profile__elem">
                    <p className="profile__data">Имя</p>
                    <p className="profile__data">Дастан</p>
                </li>
                <li className="profile__elem">
                    <p className="profile__data">Почта</p>
                    <p className="profile__data">pochta@yandex.ru</p>
                </li>
            </ul>
        </div>
        <div className="profile__buttons">
            <button className="profile__button">Редактировать</button>
            <button className="profile__button profile__button_red">Выйти из аккаунта</button>
        </div>
    </div>
  );
}

export default Profile;
