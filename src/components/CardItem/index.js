import './index.css'

const BannerDisplay = props => {
  const {data} = props
  const {title, description, className, imgUrl} = data
  return (
    <li className={className}>
      <div className="card">
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default BannerDisplay
