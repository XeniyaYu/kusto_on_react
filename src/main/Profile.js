import imageAva from '../img/ava.jpg';
import addPlus from '../img/plus.svg';
import imagePencil from '../img/pencil.svg';
function Profile () {
    return (
        <section className="profile">
          <div>
            <img src={imageAva} className="profile__avatar" alt="фото" />
          </div>
          <div className="profile__info">
            <span className="profile__info__name">Жак-Ив Кусто</span>
            <button className="profile__info__edit-button__button"><img src={imagePencil} alt="edit"
              className="profile__info__edit-button__picture" /></button>
            <span className="profile__info__status">Исследователь океана</span>
          </div>
          <div>
            <button className="profile__add-button"><img src={addPlus}
              className="profile__add-button__plus" alt="add"/></button>

          </div>

        </section>
    )
}
export default Profile