const Button = ({ name, url }) => {
  return (
    <a href={url}>
      {' '}
      <button>{name}</button>
    </a>
  );
};
export default Button;
