import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import logger from "../../utils/logger";

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext);
  const { t, language } = useContext(LanguageContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = t.contact.form.nameError;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t.contact.form.emailError;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = t.contact.form.messageError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error(t.contact.form.errorMessage, {
        position: "top-right",
        autoClose: 3000,
        theme: darkMode ? "dark" : "light",
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          logger.success("Email envoyé avec succès:", result.text);
          toast.success(t.contact.form.successMessage, {
            position: "top-right",
            autoClose: 3000,
            theme: darkMode ? "dark" : "light",
          });
          setFormData({ name: "", email: "", message: "" });
          event.target.reset();
        },
        (error) => {
          logger.error("Erreur lors de l'envoi de l'email:", error.text);
          toast.error(t.contact.form.errorMessage, {
            position: "top-right",
            autoClose: 3000,
            theme: darkMode ? "dark" : "light",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      id="contact"
      className={`w-full py-20 mx-auto max-w-3xl px-4 ${
        darkMode
          ? "bg-custom-black text-white"
          : "bg-custom-beige text-custom-purple-dark"
      }`}
    >
      <ToastContainer />
      <h2 className="text-4xl font-bold mb-4 text-center">
        <span
          className={`${
            darkMode ? "text-custom-purple-light" : "text-custom-purple-dark"
          } font-bold`}
        >
          {t.contact.title}
        </span>
      </h2>
      <p className="mb-10 text-center text-lg dark:text-gray-300">
        {t.contact.subtitle}
      </p>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="relative transform transition-all duration-300 hover:scale-105">
          <label htmlFor="name" className="sr-only">
            {t.contact.form.name}
          </label>
          <FaUser
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t.contact.form.namePlaceholder}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.name
                ? "border-2 border-red-500 focus:ring-red-500"
                : darkMode
                ? "focus:ring-custom-purple-light focus:ring-offset-2"
                : "focus:ring-custom-purple-dark focus:ring-offset-2"
            } ${
              darkMode
                ? "bg-custom-dark text-white placeholder-gray-400 shadow-lg border border-gray-800"
                : "bg-white text-custom-purple-dark placeholder-gray-500 shadow-md border border-gray-300"
            }`}
          />
          {errors.name && (
            <p
              id="name-error"
              className="text-red-500 text-sm mt-1 ml-4"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div className="relative transform transition-all duration-300 hover:scale-105">
          <label htmlFor="email" className="sr-only">
            {t.contact.form.email}
          </label>
          <FaEnvelope
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t.contact.form.emailPlaceholder}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.email
                ? "border-2 border-red-500 focus:ring-red-500"
                : darkMode
                ? "focus:ring-custom-purple-light focus:ring-offset-2"
                : "focus:ring-custom-purple-dark focus:ring-offset-2"
            } ${
              darkMode
                ? "bg-custom-dark text-white placeholder-gray-400 shadow-lg border border-gray-800"
                : "bg-white text-custom-purple-dark placeholder-gray-500 shadow-md border border-gray-300"
            }`}
          />
          {errors.email && (
            <p
              id="email-error"
              className="text-red-500 text-sm mt-1 ml-4"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative transform transition-all duration-300 hover:scale-105">
          <label htmlFor="message" className="sr-only">
            {t.contact.form.message}
          </label>
          <FaRegCommentDots
            className="absolute left-4 top-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder={t.contact.form.messagePlaceholder}
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 resize-none transition-all duration-300 ${
              errors.message
                ? "border-2 border-red-500 focus:ring-red-500"
                : darkMode
                ? "focus:ring-custom-purple-light focus:ring-offset-2"
                : "focus:ring-custom-purple-dark focus:ring-offset-2"
            } ${
              darkMode
                ? "bg-custom-dark text-white placeholder-gray-400 shadow-lg border border-gray-800"
                : "bg-white text-custom-purple-dark placeholder-gray-500 shadow-md border border-gray-300"
            }`}
          ></textarea>
          {errors.message && (
            <p
              id="message-error"
              className="text-red-500 text-sm mt-1 ml-4"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : darkMode
              ? "bg-custom-purple-light text-custom-black hover:bg-white"
              : "bg-custom-purple-dark text-white hover:bg-custom-purple-light"
          }`}
          aria-label={
            isSubmitting ? t.contact.form.sending : t.contact.form.send
          }
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t.contact.form.sending}
            </span>
          ) : (
            t.contact.form.send
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
