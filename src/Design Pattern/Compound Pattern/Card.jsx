import './Card.css'

export function Card({children}){
	return <div className="card">{children}</div>
}


export function CardTitle ({title}){
	return <div className="card-title">{title}</div>
}

export function CardImage ({src}){
	return <img src={src}/>
}

export function CardDescription ({description}){
	return <div className="card-description">{description}</div>
}

export function CardRating ({rating}){
	return <div className="card-rating">{rating}</div>
}




