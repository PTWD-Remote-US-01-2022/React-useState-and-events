import Button from "./Button";

const Greetings2 = ({ greetingInfo }) => {
  //console.log(language);

  const greetingStyle = {
    border: `2px solid ${greetingInfo.color}`,
    height: '10rem',
    margin: '2rem',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  return (
    <div style={greetingStyle}>
      <p>Hello Ironhackers, Lets Learn {greetingInfo.name}</p>
          <Button name={ greetingInfo.name} url={ greetingInfo.url }/>
    </div>
  );
};
export default Greetings2;
