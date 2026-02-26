import SingleRecord from './SingleRecord';

export default function Records() {
  const song = { id: 1, snm: 'abcd', singer: 'pqr' };

  return (
    <div style={{ color: 'red' }}>
      <SingleRecord record={song} />
    </div>
  );
}
