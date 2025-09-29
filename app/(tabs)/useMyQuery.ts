import { useEffect, useState } from "react";

function useMyQuery<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status} `);
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, error, isLoading };
}

export default useMyQuery;

// const {data, error, isLoading}= useMyQuery<User[]>('urkldsadasdadas')

//test task for Global Logic to Create useQuery Hook
