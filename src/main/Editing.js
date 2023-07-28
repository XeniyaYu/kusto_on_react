function Editing () {
    return (
        <section>

        <div className="edit-profile">

          <div className="edit-profile__info">
            <button className="close-button"></button>

            <h2 className="edit-profile__title">Редактировать профиль</h2>
            <p><input className="edit-profile__log" type="text" placeholder="Name" /></p>
            <p><input className="edit-profile__log" type="text" placeholder="Status" /></p>
            <button className="edit-profile__save-button">Сохранить</button>

          </div>
        </div>
      </section>
    )
}
export default Editing