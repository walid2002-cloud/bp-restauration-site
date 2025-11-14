import { Leaf } from 'lucide-react';

export default function MenuShowcase() {
  const dishes = [
    {
      name: 'Tajine de poulet au citron confit',
      description: 'Citron confit, olives vertes',
      type: 'Viande',
      image: '/poulet.png'
    },
    {
      name: 'Filet de merlu aux herbes',
      description: 'Légumes vapeur',
      type: 'Poisson',
      image: '/fish.png'
    },
    {
      name: 'Pastilla aux fruits de mer',
      description: 'Gambas, calamars, vermicelles chinoises',
      type: 'Fruits de mer',
      image: '/pastilla.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-['Poppins']">
            Exemple de menu du jour
          </h2>
          <p className="text-xl text-[#1F2937]">
            Des recettes savoureuses et équilibrées pour tous les goûts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* IMAGE DE CHAQUE PLAT */}
              <div
                className="aspect-[4/5] bg-cover bg-center"
                style={{ backgroundImage: `url(${dish.image})` }}
              ></div>

              {/* OVERLAY ET TEXTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full mb-3 self-start">
                  {dish.type}
                </span>

                <h3 className="text-2xl font-bold text-white mb-2 font-['Poppins']">
                  {dish.name}
                </h3>

                <p className="text-white/90 mb-3">{dish.description}</p>

                <div className="inline-flex items-center bg-[#F2A65A] text-white text-sm font-semibold px-4 py-2 rounded-lg self-start">
                  Boisson & dessert inclus
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
