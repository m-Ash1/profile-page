/* eslint-disable react/prop-types */

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={info.imagePath} alt={info.name} />
      </div>
      <div className="body">
        <div className="name">
          {info.name} <br /> #{info.id}
        </div>
        <div className="attributes">
          <div className="attr">
            <div className="attrHead">Class</div>
            <div className="attrDesc">{info.characterClass}</div>
          </div>
          <div className="attr">
            <div className="attrHead">Title</div>
            <div className="attrDesc">{info.title}</div>
          </div>
          <div className="attr">
            <div className="attrHead">Level</div>
            <div className="attrDesc">{info.level}</div>
          </div>
        </div>
        <div className="btn">Add Friend</div>
      </div>
    </div>
  );
};

export default Card;
