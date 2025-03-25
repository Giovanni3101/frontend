import { motion } from 'framer-motion';

interface PartnerCardProps {
  name: string;
  logo: string;
  description: string;
  linkPartner: string;
}

export function PartnerCard({
  name,
  logo,
  description,
  linkPartner,
}: PartnerCardProps) {
  return (
    <div className="partnerStyle relative">
      <motion.div
        initial={{ opacity: 0, scale: 1.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="text-center border-2 border-green-600 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img src={logo} alt={name} className="h-24 object-contain mx-auto" />
        <h3 className="mt-4 text-lg font-semibold text-center text-gray-900">
          {name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 text-center">{description}</p>
        <a href={linkPartner}>
          <button className="my-3 rounded-lg p-2 bg-green-600 text-white align-center">
            Read more
          </button>
        </a>
      </motion.div>
    </div>
  );
}
