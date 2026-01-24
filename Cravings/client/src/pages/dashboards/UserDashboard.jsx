import React, { useState } from "react";
import SideBar from "../../components/userDashboard/SideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelp from "../../components/userDashboard/UserHelp";


const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const[isCollapse , setIsCollapse] = useState(true);
  return (
    <>
      <div className="flex w-full h-[86vh]">
        <div className={` bg-(--bg-accent) duration-300 ${isCollapse ? "w-3/60" : "w-12/60"} `}>
          <SideBar active={active} setActive={setActive} isCollapse= {isCollapse} setIsCollapse = {setIsCollapse} />
        </div>
        <div className={`  ${isCollapse ? "w-57/60" : "w-48/60"}`}>
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
