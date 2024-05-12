import css from "./Profile.module.css";

function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.profile}>{name}</p>
        <p className={css.profileGray}>@{tag}</p>
        <p className={css.profileGray}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.element}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.element}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.element}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
