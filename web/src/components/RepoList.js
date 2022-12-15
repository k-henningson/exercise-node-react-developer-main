import { useEffect, useState } from 'react';
import axios from 'axios';
import RepoItem from './RepoItem';

export default function RepoList() {
  const [repo, setRepo] = useState([]);

  const fetchRepo = function () {
    return axios.get('/repos').then((res) => {
      const sorted = res.data.sort((a, b) => {
        return b.created_at - a.created_at;
      });
      setRepo(sorted);
    });
  };

  useEffect(() => {
    fetchRepo();
  }, []);

  const filterLanguage = (language) => {
    const filtered = repo.filter((f) => f.language === language);
    return setRepo(filtered);
  };

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
        <button onClick={() => filterLanguage(language)}>
          Filter by language
        </button>
      </div>
    );
  });
  return <div>{items}</div>;
}
