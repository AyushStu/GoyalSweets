import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Css/Checkout.css";

export default function Checkout() {
  const location = useLocation();
  const { subtotal } = location.state || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleS = (data) => {
    console.log(data);
    alert("Order has been placed!");
  };

  return (
    <div>
      <form className="Checkout1" onSubmit={handleSubmit(handleS)}>
        <label>Contact</label>
        <input
          type="text"
          placeholder="Email or phone number"
          {...register("contact", { required: true })}
        />
        <span className="error">
          {errors.contact ? "Contact is required" : ""}
        </span>

        <label>Delivery</label>
        <input
          type="text"
          placeholder="Country/Region"
          {...register("Country", { required: true })}
        />
        <span className="error">
          {errors.Country ? "Country is required" : ""}
        </span>

        <section className="Name">
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("F_name", { required: true })}
            />
            <span className="error">
              {errors.F_name ? "First Name is required" : ""}
            </span>
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("L_name", { required: true })}
            />
            <span className="error">
              {errors.L_name ? "Last Name is required" : ""}
            </span>
          </div>
        </section>

        <input
          type="text"
          placeholder="Address"
          {...register("Address", { required: true })}
        />
        <span className="error">
          {errors.Address ? "Address is required" : ""}
        </span>

        <input
          type="text"
          placeholder="City"
          {...register("City", { required: true })}
        />
        <span className="error">{errors.City ? "City is required" : ""}</span>

        <input type="text" placeholder="State (optional)" />

        <p>Total: Rs. {subtotal}.00</p>

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}
