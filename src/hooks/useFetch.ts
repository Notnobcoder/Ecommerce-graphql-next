import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState();

  useEffect(() => {
    const handleGet = async () => {
      await axios
        .get(url)
        .then((_res) => {
          setData(_res.data);
        })
        .catch((_err) => {
          setData(_err);
        });
    };

    handleGet();
  }, []);

  return { data };
}
