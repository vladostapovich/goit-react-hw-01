import clsx from "clsx";
import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  // let status = isOnline ? "online" : "offline";
  return (
    <div className={css.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
}
export default FriendListItem;

// p className={status}>{isOnline ? "online" : "offline"}</p
