import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const { darkMode } = useContext(ThemeContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Collecte des données du formulaire
        const form = event.target;

        // Envoie les données via EmailJS
        emailjs
            .sendForm(
                'service_sdjy7gu', // Remplacez par votre Service ID EmailJS
                'template_mgcas0c', // Remplacez par votre Template ID EmailJS
                form,
                'IGAjA1kiop9zdzAt7' // Remplacez par votre Public Key (User ID) EmailJS
            )
            .then(
                (result) => {
                    console.log('Email envoyé avec succès:', result.text);
                    alert('Message envoyé avec succès !');
                    form.reset(); // Réinitialise le formulaire
                },
                (error) => {
                    console.error('Erreur lors de l\'envoi de l\'email:', error.text);
                    alert('Erreur lors de l\'envoi. Veuillez réessayer.');
                }
            );
    };

    return (
        <div
            className={`w-full py-12 mx-auto max-w-3xl transition-colors duration-300 ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
            id="contact"
        >
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-gray-200">
                Contactez-moi
            </h2>
            <p className="mb-8 text-center text-lg dark:text-gray-300">
                Vous avez une question ou souhaitez collaborer ? Remplissez le formulaire ci-dessous.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className={`w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 ${
                            darkMode
                                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500'
                                : 'bg-gray-100 text-black placeholder-gray-500 focus:ring-blue-500'
                        }`}
                    />
                </div>
                <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Votre email"
                        className={`w-full pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 ${
                            darkMode
                                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500'
                                : 'bg-gray-100 text-black placeholder-gray-500 focus:ring-blue-500'
                        }`}
                    />
                </div>
                <div className="relative">
                    <FaRegCommentDots className="absolute left-4 top-4 text-gray-500 dark:text-gray-400" />
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="Votre message"
                        className={`w-full pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 resize-none ${
                            darkMode
                                ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-blue-500'
                                : 'bg-gray-100 text-black placeholder-gray-500 focus:ring-blue-500'
                        }`}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transition duration-300 font-semibold"
                >
                    Envoyer le message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
