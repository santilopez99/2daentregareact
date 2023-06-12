import "./Counter.css";


const Counter = ({ counter, setCounter}) => {

  const onAdd = () => {
    setCounter(counter + 1);
  };
  const onSubtract = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counterContainer">
      <div className="counter"> Cantidad: {counter} </div>
      <div>
        <button className="rest" onClick={onSubtract}>-</button>
        <button className="add" onClick={onAdd}>+</button>
      </div>
    </div>
  );
};

export default Counter;
