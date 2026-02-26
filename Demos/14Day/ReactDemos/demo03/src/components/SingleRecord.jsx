export default function SingleRecord(props) {
  console.log(props);
  return (
    <ul>
      <li>{props.record.id}</li>
      <li>{props.record.snm}</li>
      <li>{props.record.singer}</li>
    </ul>
  );
}

// props : to pass data from parent to child component
// using props the reverse is not possible
