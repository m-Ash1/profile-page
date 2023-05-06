import ashImage from "../assets/images/characters/ash.jpg";

const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src={ashImage} alt="ash" />
      </div>
      <div className="body">
        <div className="name">
          ash <br /> #0000
        </div>
        <div className="attributes">
          <div className="attr">
            <div className="attrHead">Class</div>
            <div className="attrDesc">Fighter</div>
          </div>
          <div className="attr">
            <div className="attrHead">Title</div>
            <div className="attrDesc">Overthinker</div>
          </div>
          <div className="attr">
            <div className="attrHead">Level</div>
            <div className="attrDesc">90</div>
          </div>
        </div>
        <div className="btn">Add Friend</div>
      </div>
    </div>
  );
};

export default Card;
