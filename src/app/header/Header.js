"use client";
import Link from "next/link";
import "./header.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  const quantity = useSelector((state) => {
    return state.cart.items.length;
  });
  const [scrollDown, setScrollDown] = useState(false);
  const activeHeader = () => {
    if (window.scrollY >= 130) {
      setScrollDown(true);
    } else {
      setScrollDown(false);
    }
  };
  useEffect(() => {
    activeHeader();
    window.addEventListener(`scroll`, activeHeader);
  }, []);
  const fixedHeader = scrollDown ? "active-nav-bar" : "";

  const logIn = (
    <>
      <svg
        className={scrollDown ? "sign-in-icon sign-in-active" : "sign-in-icon"}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      <p>Sign in</p>
    </>
  );
  const logOut = (
    <>
      <svg
        className={scrollDown ? "sign-in-icon sign-in-active" : "sign-in-icon"}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      <p>Welcome, {data?.user.name}</p>
    </>
  );
  return (
    <header className={`header ${fixedHeader}`}>
      <nav className="nav-bar ">
        <div className="navbar">
          <Link href="/">
            <h1 className={scrollDown ? "logo logo-active" : "logo"}>LOGO</h1>
          </Link>
        </div>

        <div className="icons">
          <Link href="./checkout" className="cart">
            <span>
              <svg
                className={
                  scrollDown ? "cart-icon cart-icon-active" : "cart-icon"
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="totalQty">
                <p>{quantity}</p>
              </span>
            </span>
          </Link>
          <div className="sign-in" onClick={!data ? signIn : signOut}>
            {data ? logOut : logIn}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
