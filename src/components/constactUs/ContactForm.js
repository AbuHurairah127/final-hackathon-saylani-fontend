import React, { useState } from "react";
import Button from "../button/Button";
import { useDispatch } from "react-redux";
import { createSuggestion } from "../../store/actions/suggestionActions";
import ButtonLoader from "./../buttonLoader/ButtonLoader";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [suggestion, setSuggestion] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });
  const onChangeHandler = (e) => {
    setSuggestion({ ...suggestion, [e.target.name]: e.target.value });
  };
  const addSuggestion = (e) => {
    setSuggestion({ ...suggestion, [e.target.name]: e.target.value });
    e.preventDefault();
    if (
      suggestion.name === "" ||
      suggestion.email === "" ||
      suggestion.phone === "" ||
      suggestion.message === ""
    ) {
      window.notify("Please fill all the input fields properly.", "error");
    } else {
      dispatch(createSuggestion(suggestion, setLoading));
    }
  };
  return (
    <div
      className="bg-[#F6F8F7] min-h-max pb-5 max-w-screen flex flex-col"
      id="contactUs"
    >
      <div className="contactFormHeader w-full pt-8">
        <h1 className="text-center text-4xl font-bold">
          What we can do for you?
          <br />
          (Any Suggestions)
        </h1>
      </div>
      <form>
        <div className="w-full flex flex-col items-center">
          <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
            <input
              type="text"
              name="name"
              id="userName"
              placeholder="Your Name *"
              value={suggestion.name}
              onChange={(e) => onChangeHandler(e)}
              required
              className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={suggestion.email}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Email *"
              required
              className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
            />
          </div>
          <div className="w-[60vw] flex flex-row flex-wrap justify-between md:h-12 mt-5">
            <select
              name="class"
              id="class"
              value={suggestion.class}
              onChange={(e) => onChangeHandler(e)}
              className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
            >
              <option value="">Select Class (optional)</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="1st year">1st year</option>
              <option value="2nd year">2nd year</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={suggestion.phone}
              onChange={(e) => onChangeHandler(e)}
              id="tel"
              placeholder="Phone *"
              required
              className="md:w-[28vw] outline-0 px-4 py-2 rounded-sm border-2"
            />
          </div>
          <div className="w-[60vw] flex flex-row justify-between mt-5">
            <textarea
              name="message"
              id="msg"
              cols="30"
              rows="10"
              value={suggestion.message}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter your message *"
              className="w-full px-3 py-2 h-40 outline-0 border-2 rounded-sm"
              required
            ></textarea>
          </div>
          <div className="w-[60vw] flex flex-row justify-center mt-5">
            <Button
              label={loading ? <ButtonLoader color="#DE5C0B" /> : "Submit"}
              type="submit"
              event={(e) => {
                addSuggestion(e);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
