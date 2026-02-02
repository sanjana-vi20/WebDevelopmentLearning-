import { Sidebar } from 'lucide-react'
import React, { useState } from 'react'
// import UserDashboard from './UserDashboard'
import RestaurantSideBar from '../../components/restaurantDashboard/RestaurantSideBar';
import ResturantOverview from '../../components/restaurantDashboard/ResturantOverview';
import RestaurantProfile from '../../components/restaurantDashboard/RestaurantProfile';
import RestaurantOrder from '../../components/restaurantDashboard/RestaurantOrder';
import UserTransaction from '../../components/userDashboard/UserTransaction';
import UserHelp from '../../components/userDashboard/UserHelp';

const RestaurantDashboard = () => {
 const [active, setActive] = useState("overview");
  const[isCollapse , setIsCollapse] = useState(true);
  return (
    <>
      <div className="flex w-full h-[86vh]">
        <div className={` bg-(--bg-accent) duration-300 ${isCollapse ? "w-3/60" : "w-12/60"} h-screen`}>
          <RestaurantSideBar active={active} setActive={setActive} isCollapse= {isCollapse} setIsCollapse = {setIsCollapse} />
        </div>
        <div className={`  ${isCollapse ? "w-57/60" : "w-48/60"}`}>
        {active === 'res-overview' && <ResturantOverview/>}
        {active === 'res-profile' && <RestaurantProfile/>}
        {active === 'res-order' && <RestaurantOrder/>}
        {active === 'transaction' && <UserTransaction/>}
        {active === 'helpdesk' && <UserHelp/>}
        </div>
      </div>
    </>
  );
};

export default RestaurantDashboard