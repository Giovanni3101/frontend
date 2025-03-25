import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Phone, AlertCircle, DollarSign, Wallet, CreditCard as VisaIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import donate from '../img/gestionnaire-homme-noir.jpg';

const paymentMethods = [
  { id: 'card', label: 'Carte bancaire', icon: CreditCard },
  { id: 'visa', label: 'Visa', icon: VisaIcon },
  { id: 'airtel', label: 'Airtel Money', icon: Phone },
  { id: 'orange', label: 'Orange Money', icon: Phone },
  { id: 'mpesa', label: 'M-Pesa', icon: Wallet },
];

const donationAmounts = [10, 20, 50, 100, 200, 500];

export function Donate() {
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simuler un traitement de paiement
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Don effectué avec succès !');
      setAmount('');
      setCustomAmount(false);
    } catch (error) {
      toast.error('Erreur lors du traitement du don');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 bg-gray-100 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Faire un don
          </h1>
          <p className="text-xl text-gray-600">
            Soutenez nos projets pour un développement durable en RDC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <img src={donate} alt="donate_picture" className="w-full rounded-lg shadow-xl" />
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Pourquoi faire un don ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DollarSign className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Soutenir des projets durables qui transforment des vies</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Contribuer au développement de communautés locales</span>
                </li>
                <li className="flex items-start">
                  <DollarSign className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Participer à la protection de l'environnement</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant du don
                </label>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {donationAmounts.map((amt) => (
                    <motion.button
                      key={amt}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setAmount(amt.toString());
                        setCustomAmount(false);
                      }}
                      className={`p-3 border rounded-lg text-center ${
                        amount === amt.toString() && !customAmount
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-500'
                      }`}
                    >
                      ${amt}
                    </motion.button>
                  ))}
                </div>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    value={customAmount ? amount : ''}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setCustomAmount(true);
                    }}
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Montant personnalisé"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Méthode de paiement
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <motion.button
                      key={method.id}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 border rounded-lg flex items-center justify-center ${
                        paymentMethod === method.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <method.icon className="h-6 w-6 mr-2" />
                      <span>{method.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de carte
                    </label>
                    <input
                      type="text"
                      className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'expiration
                      </label>
                      <input
                        type="text"
                        className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {(paymentMethod === 'airtel' || paymentMethod === 'orange' || paymentMethod === 'mpesa') && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="+243 ..."
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <AlertCircle className="h-4 w-4" />
                    <span>
                      Vous recevrez un message pour confirmer le paiement
                    </span>
                  </div>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading || !amount}
                className="w-full bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
              >
                {isLoading ? 'Traitement en cours...' : 'Faire un don'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}