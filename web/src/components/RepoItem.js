export default function RepoItem(props) {
  return (
    <div
      onClick={() => alert('Div is clickable')}
      style={{ border: '1px solid black' }}
    >
      <h2>Name: {props.name}</h2>
      <h2>Language: {props.language}</h2>
      <h2>Description: {props.description}</h2>
      <h2>Forks count: {props.forksCount}</h2>
    </div>
  );
}
