import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorMsg = useRouteError();
  console.log(errorMsg);

  return (
    <div>
      <h1>OOPS</h1>
      <h2>Something went wrong !!!</h2>
      <h2>
        {errorMsg.status} : {errorMsg.statusText}
      </h2>
    </div>
  );
};

export default Error;
