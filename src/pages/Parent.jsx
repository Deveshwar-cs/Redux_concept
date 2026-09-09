import Child from "./Child";

const Parent = ({passingValue}) => {
  return (
    <div>
      <h1>Parent Components {passingValue}</h1>
      <Child />
    </div>
  );
};

export default Parent;
