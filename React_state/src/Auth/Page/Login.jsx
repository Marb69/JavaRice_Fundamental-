import { useState } from "react";
import Form from "../components/Form";

const Login = () => {
  const [FormShow, setFormShow] = useState(false);

  return (
    <div className="max-w-4xl mx-auto h-screen  content-center">
      <div className="flex rounded overflow-hidden h-150 bg-amber-200 ">
        <div
          className={`flex-1 content-center ${FormShow ? "bg-transparent translate-x-1" : "bg-neutral-50 "} transition-all ease-in-out duration-200`}
        >
          <div className={`${FormShow ? "hidden" : ""}`}>
            <Form formShow={FormShow} setformShow={setFormShow} />
          </div>
        </div>
        <div
          className={`flex-1 content-center ${FormShow ? "bg-neutral-50 " : "bg-transparent -translate-x-1"} transition-all ease-in-out duration-200 `}
        >
          <div className={`${FormShow ? "" : "hidden"}`}>
            <Form formShow={FormShow} setformShow={setFormShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
