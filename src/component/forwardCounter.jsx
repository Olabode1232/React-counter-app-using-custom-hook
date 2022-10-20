import Card from "../card/card";
import useCounter from "../card/hook/useCounter";

const ForwardCounter = (props) => {
  const count = useCounter();

  return <Card>{count}</Card>;
};

export default ForwardCounter;
