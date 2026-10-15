import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Eyebrow } from './motion';

const initialForm = {
  fullName: '',
  company: '',
  employees: '',
  service: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSuccess(true);
    setIsSubmitting(false);
    window.setTimeout(() => {
      setIsSuccess(false);
      setFormData(initialForm);
    }, 3200);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  return (
    <section id="contact" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow index="07">Échange</Eyebrow>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">Contactez-nous</h2>
          <p className="mt-4 text-lg text-ink/70">Parlons de vos besoins en restauration collective</p>

          {isSuccess ? (
            <div className="mt-8 rounded-[1.6rem] border border-emerald-200 bg-emerald-50 px-8 py-14 text-center">
              <CheckCircle2 className="mx-auto text-emerald-600" size={48} />
              <h3 className="mt-4 font-display text-3xl text-emerald-900">Message envoyé avec succès !</h3>
              <p className="mt-2 text-emerald-800">Notre équipe vous contactera dans les 24 heures.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 rounded-[1.6rem] border border-black/5 bg-[#fffdf9] p-6 shadow-[0_30px_70px_-46px_rgba(16,22,32,0.85)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nom complet" name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" required />
                <Field label="Nom de l'entreprise" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" required />
                <Field label="Nombre d'employés" name="employees" value={formData.employees} onChange={handleChange} required />
                <label className="block text-sm font-medium text-ink">
                  Service souhaité <span className="text-copper">*</span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 outline-none transition focus:border-copper"
                  >
                    <option value="">Sélectionner un service</option>
                    <option value="cantine">Cantine sur site</option>
                    <option value="livraison">Livraison quotidienne</option>
                  </select>
                </label>
                <Field label="Email professionnel" name="email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                <Field label="Téléphone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
              </div>

              <label className="mt-5 block text-sm font-medium text-ink">
                Message personnalisé
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-paper px-4 py-3 outline-none transition focus:border-copper"
                />
              </label>

              <p className="mt-4 text-xs text-ink/55">
                <span className="text-copper">*</span> Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-full bg-copper py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink disabled:opacity-60"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-4 lg:col-span-5 lg:pt-24">
          <div className="rounded-[1.6rem] border border-black/5 bg-[#fffdf9] p-7">
            <h3 className="font-display text-2xl text-ink">Informations de contact</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <Info icon={Phone} label="Téléphone">
                <a href="tel:+212661952493" className="hover:text-copper">+212 661952493</a>
              </Info>
              <Info icon={Mail} label="Email">
                <a href="mailto:contact@bprestauration.ma" className="block hover:text-copper">contact@bprestauration.ma</a>
                <a href="mailto:bprestauration@gmail.com" className="block hover:text-copper">bprestauration@gmail.com</a>
              </Info>
              <Info icon={MapPin} label="Adresse">
                La Colline 28804<br />Mohammedia, Maroc
              </Info>
              <Info icon={Clock} label="Horaires">
                Lun-Ven: 8:00-18:00<br />Sam: 8:00-14:00<br />Dim: Fermé
              </Info>
            </ul>
          </div>

          <div className="rounded-[1.6rem] bg-ink p-7 text-white">
            <h3 className="font-display text-2xl">Organiser une réunion</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Planifiez un rendez-vous avec notre équipe pour discuter de votre projet en détail.
            </p>
            <button
              onClick={() => document.getElementById('fullName')?.focus()}
              className="mt-6 w-full rounded-full bg-white py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber"
            >
              Prendre rendez-vous
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label} {required && <span className="text-copper">*</span>}
      <input
        id={name === 'fullName' ? 'fullName' : undefined}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-black/10 bg-paper px-4 py-3 outline-none transition focus:border-copper"
      />
    </label>
  );
}

function Info({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper text-copper">
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">{label}</span>
        <span className="mt-1 block text-ink/80">{children}</span>
      </span>
    </li>
  );
}
