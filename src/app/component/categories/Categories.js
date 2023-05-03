"use client";
import Link from "next/link";
import "./Categories.css";

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <nav className="nav">
        <div className="grid-item grid-item-1">
          <Link href="/category/men's%20clothing">
            <p>Men</p>
            <img
              className="overlay"
              src="https://images.unsplash.com/photo-1588731222899-68315ddd5e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>
        <div className="grid-item grid-item-2">
          <Link href="/category/others/1">
            <p>New Season</p>

            <img
              src="https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjB3aW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              width="100"
              height="100"
            />
          </Link>
        </div>
        <div className="grid-item grid-item-3">
          <Link href="/category/jewelery" className="overlay">
            <p>jewelery</p>
            <img
              src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </Link>
        </div>
        <div className="grid-item grid-item-4">
          <Link href="/category/women's%20clothing" className="overlay">
            <p>Women</p>
            <img
              src="https://images.unsplash.com/photo-1616715623022-65d18f0042ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb24lMjB3aW50ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>
        <div className="grid-item grid-item-5">
          <Link href="/category/others/4" className="overlay">
            <p>Shoes</p>
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Link>
        </div>
        <div className="grid-item grid-item-6">
          <Link href="/category/all-products" className="overlay">
            <p>Sale</p>
            <img
              src="https://plus.unsplash.com/premium_photo-1673502752899-04caa9541a5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              width="100"
              height="100"
            />
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Categories;
