import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    employees: '',
    service: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        company: '',
        employees: '',
        service: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-['Poppins']">
            Contactez-nous
          </h2>
          <p className="text-xl text-[#1F2937]">
            Parlons de vos besoins en restauration collective
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {isSuccess ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
                <CheckCircle2 className="mx-auto text-green-500 mb-6" size={64} />
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Message envoyé avec succès !
                </h3>
                <p className="text-green-700 text-lg">
                  Notre équipe vous contactera dans les 24 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Nom complet <span className="text-[#D86C4E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Nom de l'entreprise <span className="text-[#D86C4E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Nombre d'employés <span className="text-[#D86C4E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Service souhaité <span className="text-[#D86C4E]">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Sélectionner un service</option>
                      <option value="cantine">Cantine sur site</option>
                      <option value="livraison">Livraison quotidienne</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Email professionnel <span className="text-[#D86C4E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0F172A] font-medium mb-2">
                      Téléphone <span className="text-[#D86C4E]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-[#0F172A] font-medium mb-2">
                    Message personnalisé
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F2A65A] focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <p className="text-sm text-[#1F2937] mb-6">
                  <span className="text-[#D86C4E]">*</span> Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F2A65A] text-white px-8 py-4 rounded-lg hover:bg-[#D86C4E] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 font-['Poppins']">
                Informations de contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] mb-1">Téléphone</div>
                    <a href="tel:+212661952493" className="text-[#1F2937] hover:text-[#D86C4E] transition-colors">
                      +212 661952493
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] mb-1">Email</div>
                    <a href="mailto:contact@bprestauration.ma" className="text-[#1F2937] hover:text-[#D86C4E] transition-colors block">
                      contact@bprestauration.ma
                    </a>
                    <a href="mailto:bprestauration@gmail.com" className="text-[#1F2937] hover:text-[#D86C4E] transition-colors block">
                      bprestauration@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] mb-1">Adresse</div>
                    <p className="text-[#1F2937]">
                      La Colline 28804<br />
                      Mohammedia, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F172A] mb-1">Horaires</div>
                    <p className="text-[#1F2937]">
                      Lun-Ven: 8:00-18:00<br />
                      Sam: 8:00-14:00<br />
                      Dim: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#D86C4E] to-[#F2A65A] rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-['Poppins']">
                Organiser une réunion
              </h3>
              <p className="mb-6 leading-relaxed">
                Planifiez un rendez-vous avec notre équipe pour discuter de votre projet en détail.
              </p>
              <button className="w-full bg-white text-[#D86C4E] px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-semibold">
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
