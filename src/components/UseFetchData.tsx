import React from "react";

const UseFetchData = () => {
  return <div>UseFetchData</div>;
};

export default UseFetchData;
// import { useState, useEffect } from "react";
// import api from "./api/posts";
// // import { Item } from "./model";
// const UseFetchData = (url: string) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState<any>();
//   const [error, setError] = useState<any>(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await api.get(`${url}`);
//         setData(response.data);
//         setIsLoading(false);
//         setError(null);
//       } catch (err: any) {
//         if (err.response) {
//           console.log(err.message);
//           setError(err.message);
//           setIsLoading(false);
//         } else {
//           setError(`Error: ${err.message}`);
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchData();
//   }, [url]);
//   return { data, isLoading, error };
// };
// export default UseFetchData;
