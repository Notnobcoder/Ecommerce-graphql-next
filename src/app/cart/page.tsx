"use client";

"use client";
import axios from "axios";
import { useState } from "react";

function Page() {
  const [data, setData] = useState([]);
  const graphqlEndpoint = "http://localhost:8000/graphql";

  const graphqlQuery = `
    query {
      games {
        id
        title
        platform
      }
    }
  `;

  // const handleGraphqlRequest = async () => {
  //   try {
  //     const response = await axios.post(graphqlEndpoint, {
  //       query: graphqlQuery,
  //     });
  //     setData(response.data.data.games);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleGraphqlRequest = async () => {
    try {
      const response = await axios.post(graphqlEndpoint, {
        params: {
          query: graphqlQuery,
        },
      });
      setData(response.data.data.games);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h4>Games List</h4>
      <button onClick={handleGraphqlRequest}>Fetch Games</button>
    </div>
  );
}

export default Page;
