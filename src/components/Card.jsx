import './../style/Card.css';

function Card (props) {
    return (
        <div className='hero-wrap'>
            <h2 className='title'>{props.name}</h2>
            <div>Вселенная: {props.universe}</div>
            <div>Альтер эго: {props.alterEgo}</div>
            <div>Род деятельности: {props.occupation}</div>
            <div>Друзья: {props.friends}</div>
            <div>Суперсилы: {props.power}</div>
            <img src={props.url} className='img'/>
            <div>Подробнее: {props.details}</div>
        </div>
    );
}

export default Card;
