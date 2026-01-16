import React, { useState } from "react";
import SideBar from "../../components/userDashboard/SideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelp from "../../components/userDashboard/UserHelp";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="flex w-full h-[86vh]">
        <div className="border border-green-500 bg-(--bg-accent) w-1/7">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-red-500 w-6/7">
        {active === 'overview' && <UserOverview/>}
        {active === 'profile' && <UserProfile/>}
        {active === 'order' && <UserOrder/>}
        {active === 'transaction' && <UserTransaction/>}
        {active === 'helpdesk' && <UserHelp/>}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
