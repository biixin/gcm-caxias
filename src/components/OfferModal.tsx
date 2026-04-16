import { useState, useEffect } from 'react';
import { X, Rocket, Clock, Video, MessageCircle, Lock, Zap } from 'lucide-react';
import { createPix, checkPaymentStatus } from '../services/pushinpayService';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OfferModal({ isOpen, onClose }: OfferModalProps) {
  const [showPayment, setShowPayment] = useState(false);
  const [pixCode, setPixCode] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const handleGeneratePix = async () => {
    setLoading(true);
    try {
      const response = await createPix(14.90);
      setPixCode(response.qr_code);
      setTransactionId(response.id);
      setShowPayment(true);
    } catch (error) {
      alert('Erro ao gerar PIX. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    alert('Código PIX copiado!');
  };

  const handleVerifyPayment = async () => {
    setVerifying(true);
    try {
      const response = await checkPaymentStatus(transactionId);
      if (response.status === 'paid' || response.status === 'completed') {
        alert('Pagamento confirmado! Você receberá o acesso em instantes.');
        window.location.href = 'https://drive.google.com/drive/folders/1GkkP0ptnYDGakeHAL6p-F3k4YAu6hL--?usp=sharing';
      } else {
        alert('Pagamento ainda não identificado. Aguarde alguns instantes e tente novamente.');
      }
    } catch (error) {
      alert('Erro ao verificar pagamento. Tente novamente.');
    } finally {
      setVerifying(false);
    }
  };

  const handleClose = () => {
    setShowPayment(false);
    setPixCode('');
    setTransactionId('');
    setTimeLeft(600);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-md bg-[#2a2a2a] rounded-3xl border border-amber-500/20 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center text-white z-10"
        >
          <X size={18} />
        </button>

        {showPayment ? (
          <div className="p-6 flex flex-col gap-5">
            <h3 className="text-2xl font-bold text-center text-amber-500">Pagamento via PIX</h3>

            <div className="bg-red-600 text-white px-4 py-2 rounded-xl text-center font-bold animate-pulse">
              ⏱️ Tempo: {formatTime(timeLeft)}
            </div>

            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-amber-500/20">
              <p className="text-lg font-semibold text-white">💰 Valor: R$ 14,90</p>
            </div>

            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-amber-500/20">
              <h4 className="text-white font-semibold mb-3">Como pagar:</h4>
              <ol className="text-gray-300 text-sm space-y-2">
                <li><span className="text-amber-500 font-bold">1.</span> Copie o código PIX abaixo</li>
                <li><span className="text-amber-500 font-bold">2.</span> Abra o app do seu banco</li>
                <li><span className="text-amber-500 font-bold">3.</span> Escolha PIX Copia e Cola</li>
                <li><span className="text-amber-500 font-bold">4.</span> Cole o código e confirme</li>
                <li><span className="text-amber-500 font-bold">5.</span> Clique em "Verificar Pagamento"</li>
              </ol>
            </div>

            <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-amber-500/20">
              <p className="text-xs text-gray-400 mb-2">Código PIX:</p>
              <p className="text-white text-xs break-all font-mono">{pixCode}</p>
            </div>

            <button
              onClick={handleCopyPix}
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-bold text-white text-lg flex items-center justify-center gap-2"
            >
              📋 Copiar Código PIX
            </button>

            <button
              onClick={handleVerifyPayment}
              disabled={verifying}
              className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 transition font-bold text-white text-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {verifying ? 'Verificando...' : '✔️ Verificar Pagamento'}
            </button>

            <p className="text-center text-gray-400 text-sm">Após pagar, clique em "Verificar Pagamento"</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 flex items-center justify-center gap-2">
              <Zap size={20} className="text-white animate-pulse" />
              <span className="text-white font-bold text-sm uppercase">Oferta Relâmpago</span>
              <Zap size={20} className="text-white animate-pulse" />
            </div>

            <div className="relative">
              <div className="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-md z-10">
                <span className="text-white text-xs font-bold uppercase">Prévia</span>
              </div>
              <video
                src="https://media-wordpress.kjufc9.easypanel.host/wp-content/uploads/2026/03/prevvvvvvvv.mp4"
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-[280px] object-cover bg-black"
              />
            </div>

            <div className="p-6 flex flex-col gap-4">
              <div className="bg-red-600/20 border border-red-500 rounded-xl px-3 py-2 text-center">
                <p className="text-red-400 font-bold text-sm">⏰ Tempo Restante:</p>
                <p className="text-red-500 font-black text-3xl">{formatTime(timeLeft)}</p>
              </div>

              <h3 className="text-2xl font-bold text-center text-amber-500">Chamada de Vídeo</h3>

              <div className="bg-red-950/50 border border-red-800/50 rounded-xl p-3 flex items-center justify-center gap-2">
                <Clock size={18} className="text-red-400" />
                <span className="text-white font-semibold">Apenas R$ 14,90 HOJE</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Video size={18} className="text-amber-500" />
                  <span className="text-gray-200">📹 Chamada ao vivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-amber-500" />
                  <span className="text-gray-200">💬 Só você e eu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock size={18} className="text-amber-500" />
                  <span className="text-gray-200">🔒 Chamadinha até gozar</span>
                </div>
              </div>

              <div className="bg-[#1f1f1f] rounded-2xl p-4 border border-amber-500/20 flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-sm">R$ 50,00</span>
                  <span className="text-amber-500 text-3xl font-bold">R$ 14,90</span>
                </div>
                <span className="text-green-400 font-semibold text-sm">70% OFF • Acesso Vitalício</span>
              </div>

              <button
                onClick={handleGeneratePix}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 transition font-bold text-white text-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Rocket size={20} />
                {loading ? 'Gerando...' : 'GERAR PIX'}
              </button>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition font-semibold text-gray-300"
              >
                VER DEPOIS
              </button>

              <p className="text-center text-gray-400 text-sm">Pagamento via PIX • Liberação Imediata</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
