import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 scroll-mt-20">
      <div className="max-w-2xl mx-auto space-y-10 text-center">
        <h2 className="text-4xl font-bold italic">Bana Ulaşın</h2>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}