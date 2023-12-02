"use client";
const ThanksPage = () => {
  return (
    <div className="min-h-[90vh] bg-white text-teal-800 flex justify-center items-center">
      <div className="container mx-auto py-12">
        <h1 className="text-center text-3xl font-bold">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-center text-lg">
          Tu pedido ha sido procesado correctamente.
        </p>
        <p className="text-center text-lg">
          Te enviaremos un correo electrónico con los detalles de tu pedido.
        </p>
        <div className="mt-12">
          <button
            className="btn btn-primary w-full"
            onClick={() => (window.location.href = "/")}
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
