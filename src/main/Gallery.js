import imageLike from '../img/like.svg';
function Gallery () {
    return (
        <section className="gallery">
          <div className="gallery__karachaevsk">
            <div className="gallery__karachaevsk__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Карачаевск</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>
          <div className="gallery__elbrus">
            <div className="gallery__elbrus__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Эльбрус</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>
          <div className="gallery__dombai">
            <div className="gallery__dombai__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Домбай</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>
          <div className="gallery__elbrus">
            <div className="gallery__elbrus__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Эльбрус</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>
          <div className="gallery__dombai">
            <div className="gallery__dombai__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Домбай</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>
          <div className="gallery__karachaevsk">
            <div className="gallery__karachaevsk__photo"></div>
            <div className="gallery__description">
              <p className="gallery__description__text">Карачаевск</p>
              <img className="gallery__description__like" src={imageLike} alt="like"/>
            </div>
          </div>


        </section>
    )
}
export default Gallery