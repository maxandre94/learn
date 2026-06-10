import { useEffect, useState } from "react";

interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
}
const UtilisateursGithub = () => {
  const [responses, setResponse] = useState<GithubUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();

        if (data) setResponse(data);
      } catch (err) {
        console.error("Une erreur est survenue :", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {responses.map((response: GithubUser, i) => (
          <li key={i}>{response.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UtilisateursGithub;
