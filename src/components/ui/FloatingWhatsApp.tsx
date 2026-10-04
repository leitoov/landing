import React from 'react';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

export const FloatingWhatsApp = ({ 
  phoneNumber, 
  message = "Hola, me gustaría obtener más información sobre Nefetech." 
}: FloatingWhatsAppProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20 transition-transform hover:scale-110 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 1.756.452 3.407 1.254 4.863L2 22l5.297-1.189A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.238c-1.42 0-2.784-.367-4-.017l-2.84.637.665-2.695c-.382-1.077-.588-2.235-.588-3.425 0-4.542 3.696-8.238 8.238-8.238 4.542 0 8.238 3.696 8.238 8.238 0 4.542-3.696 8.238-8.238 8.238zm4.493-6.287c-.247-.123-1.458-.72-1.685-.802-.226-.083-.39-.123-.556.123-.164.247-.638.802-.78 .966-.144.164-.288.185-.535.062-.247-.123-1.042-.384-1.986-1.222-.734-.652-1.23-1.457-1.374-1.704-.144-.247-.015-.38.108-.503.111-.11.247-.288.37-.432.123-.144.164-.247.247-.41.083-.165.04-.31-.02-.433-.062-.124-.555-1.338-.76-1.833-.2-.482-.403-.416-.555-.424-.143-.007-.308-.009-.472-.009-.164 0-.432.062-.658.309-.226.247-.863.843-.863 2.056 0 1.213.884 2.384 1.007 2.548.123.164 1.737 2.651 4.207 3.717 1.637.705 2.296.764 3.084.64.444-.07 1.458-.596 1.663-1.171.206-.575.206-1.069.144-1.171-.062-.102-.226-.164-.473-.288z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};
