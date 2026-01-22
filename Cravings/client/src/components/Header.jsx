import React from "react";
import circle from "../assets/cravings.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Header() {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) py-3  px-3 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={circle}
            alt=""
            className="rounded-full object-cover w-20 h-20"
          />
        </Link>

        <div className="flex gap-4 text-2xl px-5 items-center ">
          <Link
            to={"/"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-(--text-secondary) hover:text-(--text-primary)"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4 text-2xs">
          {isLogin ? (
            <span>{user.fullName}</span>
          ) : (
            <div>
              <button
                className="bg-(--color-accent) px-4 py-2 rounded text-(--text-primary) hover:text-(--color-secondary-hover)"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-(--color-accent) px-4 py-2 rounded text-(--text-primary) hover:text-(--color-secondary-hover)"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
