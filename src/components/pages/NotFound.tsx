
const NotFound = () => (
  <main className="flex justify-center items-center">
    <div className="flex flex-col items-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 className="text-4xl text-center font-extrabold mt-2">Oops<span className="text-yellow-500">!</span> Esta página no está disponible</h2>
      <p className="font-bold text-center text-secondary mt-4">Es posible que el enlace que has seguido sea incorrecto o que se haya eliminado la página.</p>
    </div>
  </main>
)

export default NotFound