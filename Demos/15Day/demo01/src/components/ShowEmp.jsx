function ShowEmp({ userData, remove }) {
  return (
    <li key={userData.id}>
      {userData.id}
      {'   '}
      {userData.firstName}
      {'   '}
      {userData.lastName}
      {'   '}
      <button
        onClick={() => {
          remove(userData.id);
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default ShowEmp;
