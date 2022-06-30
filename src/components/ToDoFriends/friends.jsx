import PropTypes from "prop-types";
import styles from "./friends.module.scss";

export const FriendList = ({ friends }) => (
    <ul className={styles.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={styles.item} key={id}>
                <span className={isOnline ? styles.status : styles.disabled}>{isOnline}</span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            isOnline: PropTypes.bool,
            name: PropTypes.string,
            avatar: PropTypes.string,
        }).isRequired
    ),
};