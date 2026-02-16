import React from "react";


const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-2  ">


        <div className="grid grid-cols-4 gap-5 transition-all ease-in-out ">
          <div className="p-5 bg-yellow-400 rounded-2xl min-h-50 shadow"></div>
          <div className="p-5 bg-green-500 rounded-2xl min-h-50 shadow"></div>
          <div className="p-5 bg-blue-500 rounded-2xl min-h-50 shadow"></div>
          <div className="p-5 bg-gray-600 rounded-2xl min-h-50 shadow"></div>
        </div>

        <div className="flex h-145 gap-5">
          <div className="h-auto bg-neutral-100 shadow rounded-2xl flex-2">


            
          </div>

          <div className="flex-1 bg-neutral-100 shadow rounded-2xl">
 
              

          </div>
        </div>


  

      </div>
    </>
  );
};

export default Dashboard;
