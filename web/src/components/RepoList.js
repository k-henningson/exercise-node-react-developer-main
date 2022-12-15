import { useEffect, useState } from 'react';
import axios from 'axios';
import RepoItem from './RepoItem';

export default function RepoList() {
  const [repo, setRepo] = useState([]);

  const fetchRepo = function () {
    return axios.get('/repos').then((res) => {
      return setRepo(res.data);
    });
  };

  useEffect(() => {
    fetchRepo();
  }, []);

  const items = repo.map((item, index) => {
    const { name, language, description, forksCount } = item;

    return (
      <div key={index}>
        <RepoItem
          name={name}
          language={language}
          description={description}
          forksCount={forksCount}
        />
      </div>
    );
  });
  return <div>{items}</div>;
}
