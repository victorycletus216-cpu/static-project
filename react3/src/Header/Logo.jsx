
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


 function Logo() {
  return (
    <Link to="/" className="logo">
      <FontAwesomeIcon icon={faChair} /> OC Furniture
    </Link>
  );
}



export default Logo;
