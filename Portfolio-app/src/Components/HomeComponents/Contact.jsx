import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext);
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
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
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
      toast.error("Veuillez corriger les erreurs du formulaire", {
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
          if (import.meta.env.DEV) {
            console.log("Email envoyé avec succès:", result.text);
          }
          toast.success("Message envoyé avec succès !", {
            position: "top-right",
            autoClose: 3000,
            theme: darkMode ? "dark" : "light",
          });
          setFormData({ name: "", email: "", message: "" });
          event.target.reset();
        },
        (error) => {
          if (import.meta.env.DEV) {
            console.error("Erreur lors de l'envoi de l'email:", error.text);
          }
          toast.error("Erreur lors de l'envoi. Veuillez réessayer.", {
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
      className={`w-full py-12 mx-auto max-w-3xl transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
      id="contact"
    >
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">
        Contactez-moi
      </h2>
      <p className="mb-8 text-center text-lg dark:text-gray-300">
        Vous avez une question ou souhaitez collaborer ? Remplissez le
        formulaire ci-dessous.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            Votre nom
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
            placeholder="Votre nom"
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-2 border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            } ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-gray-100 text-black placeholder-gray-500"
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
        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Votre email
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
            placeholder="Votre email"
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-2 border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            } ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-gray-100 text-black placeholder-gray-500"
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
        <div className="relative">
          <label htmlFor="message" className="sr-only">
            Votre message
          </label>
          <FaRegCommentDots
            className="absolute left-4 top-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`w-full pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 resize-none ${
              errors.message
                ? "border-2 border-red-500 focus:ring-red-500"
                : "focus:ring-blue-500"
            } ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-gray-100 text-black placeholder-gray-500"
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
          className={`w-full py-3 rounded-full transition duration-300 font-semibold ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          aria-label={isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
