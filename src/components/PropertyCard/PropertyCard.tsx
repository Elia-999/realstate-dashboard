import type { Property } from '../../types';
import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css'

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => (
    <div className={styles.card}>
  <Link to={`/property/${property.id}`}>
    <img className={styles.img} src={property.image} alt={property.title} />
    <div className={styles.info}>
      <h3 className={styles.title}>{property.title}</h3>
      <p>${property.price}</p>
      <p>{property.bedrooms} beds · {property.location}</p>
    </div>
  </Link>
    </div>
);

export default PropertyCard;
