import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import './Policy.css';

const Policy = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="policyContainer">
      <h3 className="header">Privacy Policy</h3>
      <p>
        Your privacy is important to us. We are committed to protecting your
        personal information in accordance with the Privacy Act 1988 (Cth).
      </p>
      <div className="policytank">
        <h3>What We Collect</h3>
        <h4>
          We may collect personal information such as:
        </h4>
        <ul>
          <li style={{ listStyle: "initial" }}>
            Your name and contact details
          </li>
          <li style={{ listStyle: "initial" }}>Shipping and billing address</li>
          <li style={{ listStyle: "initial" }}>Email address</li>
          <li style={{ listStyle: "initial" }}>
            Purchase history or communication with us
          </li>
        </ul>
      </div>
      <div className="policytank">
        <h3>How We Use Your Information</h3>
        <h4>We collect this information to:</h4>
        <ul>
          <li style={{ listStyle: "initial" }}>Process and ship your orders</li>
          <li style={{ listStyle: "initial" }}>
            Communicate with you about your purchase
          </li>
          <li style={{ listStyle: "initial" }}>
            Improve our products and services
          </li>
          <li style={{ listStyle: "initial" }}>
            Comply with legal obligations
          </li>
        </ul>
      </div>
      <div className="policytank">
        <p>
          We do not sell, rent, or share your personal information with third
          parties except where necessary to process your order (e.g. shipping
          carriers or payment processors)
        </p>
      </div>
      <div className="policytank">
        <h3>Data Security</h3>
        <p>
          We take reasonable steps to protect your data from misuse, loss,
          unauthorised access, or disclosure.
        </p>
      </div>
      <div className="policytank">
        <h3>Access & Correction</h3>
        <p>
          You may request access to your personal information at any time and
          ask us to correct it if it is inaccurate.
        </p>
      </div>
      <div className="policytank">
        <h3>Contact Us</h3>
        <p>
          If you have any privacy concerns or questions, please contact us
          directly at [your email address].
        </p>
      </div>
      <div>
        <div></div>
      </div>
      <div className="policytank">
        <h3>Terms of Service</h3>
        <p>
          By purchasing from our store, you agree to the following terms and
          conditions:
        </p>
        <div>
          <p>1. Products</p>
          <p>
            All items are second-hand, vintage, or pre-owned, and are sold
            as-is. We make every effort to describe items accurately and include
            clear photographs.
          </p>
          <p>2. Pricing & Payment</p>
          <p>
            All prices are in Australian Dollars (AUD). Payment must be received
            in full before we ship any items.
          </p>
          <p>3. Shipping</p>
          <p>
            We offer free shipping within Australia via Australia Post. Local
            pickup or free delivery within 10km may be available for certain
            items. We are not responsible for postal delays once an item has
            been dispatched.
          </p>
          <p>4. Returns</p>
          <p>
            All sales are generally final, as per our return policy. We do not
            accept returns for change of mind. If an item arrives significantly
            not as described, please contact us within 3 days of delivery.
          </p>
          <p>5. Limitation of Liability</p>
          <p>
            We are not liable for any indirect or consequential loss arising
            from the use of our products or services. Our liability is limited
            to the value of the item purchased, as permitted under Australian
            Consumer Law.
          </p>
          <p>6. Changes</p>
          <p>
            We may update these policies from time to time. Changes will take
            effect immediately upon posting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
