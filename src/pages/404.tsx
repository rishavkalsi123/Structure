import styles from "../styles/pageStyle/404.module.scss";
import ErrorImg from "../../public/404.svg";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className={styles.notFound}>
      <div>
        <img src={ErrorImg} alt="" />
        <h1>Page Not Found</h1>
        <Link to="/">
          <button className="btn btn-outline-primary">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
