import styles from "./profile.module.scss";
import PropTypes from "prop-types";

export const Profile = ({username,tag,avatar,location,followers,views,likes}) => (
        <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{username}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
        </div>
);
    Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes:PropTypes.number.isRequired,
};
