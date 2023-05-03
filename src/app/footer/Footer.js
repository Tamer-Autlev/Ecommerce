import "./footer.css";
import Link from "next/link";
import ContactBar from "../component/contactBar/ContactBar";
const Footer = () => {
  return (
    <>
      <ContactBar />
      <footer className="footer">
        <div className="links ">
          <h2>Links</h2>
          <span>FAQ</span>
          <span>Stores</span>
          <span>Cookies</span>
          <span></span>
        </div>
        <div className="contacts">
          <h2>Categories</h2>
          <div className="categories-links">
            <Link href="/category/men's%20clothing">Men</Link>
            <Link href="/category/others/1">New Season</Link>
            <Link href="/category/jewelery">jewelery</Link>
            <Link href="/category/women's%20clothing">Women</Link>
            <Link href="/category/others/4">Shoes</Link>
            <Link href="/category/all-products">Sale</Link>
          </div>
          <div className="contacts-links"></div>
        </div>
        <div className="about">
          <h2>About Us</h2>
          <p>
            is a family of brands and businesses, making it possible for
            customers around the world to express themselves through fashion and
            design, and to choose a more sustainable lifestyle.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
