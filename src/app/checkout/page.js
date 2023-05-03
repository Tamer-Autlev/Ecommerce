"use client";
import emptyCart from "../../asset/emptyCart.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../slices/cartSlice";
import Image from "next/image";
import "./checkout.css";
import Link from "next/link";
import BackHomeButton from "../UI/backHomeButton/BackHomeButton";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const page = () => {
  const cartProducts = useSelector((state) => state.cart.items);
  const { data } = useSession();
  const createCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const checkoutSession = await axios.post(`/api/create-checkout-session`, {
        items: cartProducts,
        email: data?.user.email,
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  let totalAmount = useSelector((state) => state.cart.totalAmount);
  const state = useSelector((state) => state.cart.items);
  if (state.length === 0) {
    totalAmount = 0;
  }
  const dispatch = useDispatch();

  const removeHandler = (item) => {
    dispatch(removeFromCart({ item }));
  };
  const increase = (item) => {
    dispatch(increaseQuantity({ item }));
  };
  const decrease = (item) => {
    dispatch(decreaseQuantity({ item }));
  };

  return (
    <BackHomeButton>
      <div className="checkout-page">
        <main className="prodcuts-container">
          <div>
            {cartProducts.length > 0 ? (
              <>
                {cartProducts.map((item) => {
                  return (
                    <div className="cart_item" key={item.id + item.price}>
                      <img src={item.image} alt={item.title} />
                      <div className="content">
                        <h2>{item.title}</h2>
                        <h3>{item.description}</h3>
                        <div className="price">
                          <h5> ${item.price}</h5>
                          <div className="quantity-btn">
                            <span>Quantity</span>
                            <button
                              className="quan-decrease-btn"
                              onClick={() => decrease(item)}
                            >
                              -
                            </button>
                            <h6>{item.quantity}</h6>
                            <button
                              className="quan-increase-btn"
                              onClick={() => increase(item)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <svg
                        onClick={() => removeHandler(item)}
                        className="delete-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        viewBox="0 96 960 960"
                        width="30"
                      >
                        <path d="M260.587 936.978q-27.416 0-46.643-19.156t-19.227-46.474V309.413h-44.565v-65.464h194.783v-33.471h270.391v33.304h195.022v65.631h-44.565v561.935q0 26.568-19.602 46.099-19.602 19.531-46.268 19.531H260.587Zm439.326-627.565H260.587v561.935h439.326V309.413ZM366.391 787.761h61.566v-396.5h-61.566v396.5Zm166.152 0h61.805v-396.5h-61.805v396.5ZM260.587 309.413v561.935-561.935Z" />
                      </svg>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="empty-cart">
                <Image src={emptyCart} alt="emptyCart" />
                <h2>cart empty</h2>
              </div>
            )}
          </div>
        </main>
        <section className="checkout-container">
          <div className="priceList">
            <h2>Total price</h2>
            <span>${totalAmount?.toFixed(2)}</span>
          </div>
          {totalAmount !== 0 ? (
            <button role="link" className="btn" onClick={createCheckout}>
              Proceed to checkout
            </button>
          ) : (
            <Link href="/" className="btn">
              Back Shopping
            </Link>
          )}
        </section>
      </div>
    </BackHomeButton>
  );
};

export default page;
