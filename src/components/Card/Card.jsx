import './Card.css';

function Card (props) {
    return (
        <div className='hero-wrap'>
            <h2 className='title'>{props.name}</h2>
            <div><span className='subtitle'>Вселенная:</span> {props.universe}</div>
            <div> <span className='subtitle'>Альтер эго:</span> {props.alterEgo}</div>
            <div> <span className='subtitle'>Род деятельности:</span> {props.occupation}</div>
            <div> <span className='subtitle'>Друзья:</span> {props.friends}</div>
            <div> <span className='subtitle'>Суперсилы:</span> {props.power}</div>
            <img alt='hero_picture' src={props.url} className='img'/>
            <div> <span className='subtitle'>Подробнее:</span> {props.details}</div>
        </div>
    );
}

export default Card;
