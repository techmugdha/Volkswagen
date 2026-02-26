export default function Test(props) {
  // object destructuring syntax
  const { num, msg, emoji } = props;
  // props are constants, can not assign values
  return (
    <>
      <h1>{msg}</h1>
      <h5>{num}</h5>
      <h3>{emoji}</h3>
    </>
  );
  // return (
  //   <>
  //     <h1>{props.msg}</h1>
  //     <h3>{props.emoji}</h3>
  //     <h5>{props.num}</h5>
  //   </>
  // );
}
