import image from "../../assets/Avatar/ReadyPlayerMe-Avatar (4).jpeg"
import "./games.css"
import games from "../../games.json"
import GameCard from "../../components/GameCard/index"

function Games() {
  return (
    <div className="page-background">
    <h1 className="gameTitle">Games</h1>
   <img className="avatarImg" src={image}></img>
      <p className="intro">
        Here you can play Front End Games I have
        made.
      </p>

      <div className="gameCard">
        {games.map((project) => (
          <GameCard key={project.id} project={project} />
        ))}
      </div>
    
    </div>
  )
}

export default Games