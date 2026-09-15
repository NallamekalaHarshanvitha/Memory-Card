export const Card = ({ card, onClick }) => {
    return (
    <div className= {card.isFlipped ? "card flipped" : "card"} 
     onClick={() => onClick(card)}>
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
    </div>
    );
}