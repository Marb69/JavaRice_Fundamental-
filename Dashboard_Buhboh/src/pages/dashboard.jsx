import { ArrowUp, Book, CircleDollarSignIcon, icons, MessageSquareWarningIcon, Timer } from "lucide-react";
import React from "react";
import StatCard from "../component/statCard";
import { funds } from "../data/summaryData";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="">
          <div className="flex flex-wrap gap-1.5">
            <div className="px-4 py-2 active:bg-blue-600 bg-white border cursor-pointer  border-neutral-300 rounded font-medium">
              +Add Member
            </div>
            <div className="px-4 py-2 active:bg-blue-600 bg-white border cursor-pointer  border-neutral-300 rounded font-medium">
              New Loan
            </div>
            <div className="px-4 py-2 active:bg-blue-600 bg-white border cursor-pointer  border-neutral-300 rounded font-medium">
              Record Payment
            </div>
            <div className="px-4 py-2 active:bg-blue-600 bg-white border cursor-pointer border-neutral-300 rounded font-medium">
              Reports
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-3">
            <StatCard icon={<CircleDollarSignIcon/>} title={'Total Fund'} number={funds.totalFund} contri={funds.activeContributors + ' Active Contributor'} warn={true}/>
             <StatCard icon={<Book/>} title={'Total Loans Out'} number={funds.totalLoansOut} contri={funds.activeLoans + ' Active Contributor'} warn={true}/>
              <StatCard icon={<CircleDollarSignIcon/>} title={'Expected Return'} number={funds.expectedReturns} contri={funds.totalInterestProjected + ' Interest' } warn={true}/>
               <StatCard icon={<MessageSquareWarningIcon/>} title={'Overdue / Late'} number={funds.overdueCount} contri={'Need Attention'} warn={true}/>
                <StatCard icon={<Timer/>} title={'Pending Payouts'} number={funds.pendingPayouts} contri={'Interest Owend to Member'} warn={true}/>
          </div>
        </div>
        <div className="bg-gray-500"></div>
      </div>
    </>
  );
};

export default Dashboard;
