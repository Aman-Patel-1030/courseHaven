import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";

const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "bottom-left",
            autoClose: 5000,
            theme: "dark",
          });
        },
        () => {
          toast.error("Failed, please try again later!", {
            position: "bottom-left",
            autoClose: 5000,
            theme: "dark",
          });
        }
      );

    // Reset form fields
    e.target.reset();
  };

  return (
    <div className="mt-28 min-h-screen px-4">
      <div className="text-center max-w-2xl mx-auto">
         <SectionHeader
        span="contact"
        h2="Unlocking Possibilities: Let's Connect!"
        p="Discover synergy at Cordemy. Connect for collaboration, inquiries, and endless innovation. Let's chat now!"
      />
      </div>

      <div className="grid lg:grid-cols-[45%_auto] gap-12 mt-20 max-w-6xl mx-auto items-center">
        <div>
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1692707400/message-online-chat-social-text-concept_53876-167132_dapmop.avif"
            alt="Contact"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <form
          onSubmit={sendEmail}
          ref={formRef}
          className="bg-white rounded-xl p-8 shadow-md flex flex-col gap-5 max-w-xl w-full mx-auto"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Write your name"
              required
              className="name border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Write your email"
              required
              className="email border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none transition duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              required
              rows="6"
              className="message border border-gray-300 focus:border-gray-600 py-3 px-5 rounded-xl outline-none resize-none transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary-900 text-white uppercase text-sm font-semibold py-4 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
