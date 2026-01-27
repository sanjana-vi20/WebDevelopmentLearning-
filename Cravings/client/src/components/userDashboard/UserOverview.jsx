import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

function UserOverview() {
  const {isLogin} = useAuth();
  const navigate = useNavigate();
  if(!isLogin)
  {
    navigate("/login");
  }
  return (
    <div>UserOverview</div>
  )
}

export default UserOverview