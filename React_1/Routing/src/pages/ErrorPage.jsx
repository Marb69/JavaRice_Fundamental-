import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500">
        Oops! Something went wrong
      </h1>

      <p className="text-gray-600 mt-2">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
