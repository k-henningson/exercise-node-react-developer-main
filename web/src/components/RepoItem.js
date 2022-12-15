export default function RepoItem(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Language: {props.language}</h2>
      <h2>Description: {props.description}</h2>
      <h2>Forks count: {props.forksCount}</h2>
    </div>
  );
}
