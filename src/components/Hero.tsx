const Hero = () => {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 mx-auto flex justify-center items-center">
      <div className="container space-y-10 xl:space-y-16">
        <div>
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Bienvenido a nuestro sitio web
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Encuentra los mejores profesionales para tu vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
