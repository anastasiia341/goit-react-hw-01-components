import css from "./Profile.module.css"

const Profile = ({username, tag, location, avatar, followers, views,likes}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.description}>
    <img
      src={avatar}
      alt={username}
      className={css.avatar}
    />
    <p className={css.name}>{ username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
    <span className={css.label}>Folowers</span>
    <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
    </div>
  );
}

export { Profile };
