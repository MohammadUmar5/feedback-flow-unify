

const Integrations = () => {
  const integrations = [
    { name: "Typeform", icon: "/lovable-uploads/43bcd981-7d26-4f7b-b248-05d4181243d6.png", category: "Forms", isImage: true },
    { name: "SurveyMonkey", icon: "/lovable-uploads/a84eb6e4-9d0d-4b08-ab76-1006bc250c0f.png", category: "Surveys", isImage: true },
    { name: "Google Forms", icon: "/lovable-uploads/65b7691d-5064-455b-a380-567ef8230750.png", category: "Forms", isImage: true },
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-inter text-3xl md:text-4xl font-bold text-white mb-6">
          Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Integrations</span>
        </h2>
        <p className="font-inter text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Connect with the most popular form and survey platforms to capture feedback from every source
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
            {integrations.map((integration, index) => (
              <div 
                key={integration.name}
                className="group"
              >
                <div className="
                  bg-black/40 backdrop-blur-lg border border-gray-700/50 
                  rounded-xl p-8 hover:border-cyan-400/30 
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]
                  transition-all duration-300 hover:scale-110
                ">
                  <div className="mb-4 flex justify-center items-center h-16">
                    {integration.isImage ? (
                      <img 
                        src={integration.icon} 
                        alt={integration.name}
                        className="h-12 w-auto object-contain"
                      />
                    ) : (
                      <div className="text-5xl">
                        {integration.icon}
                      </div>
                    )}
                  </div>
                  <h3 className="font-inter font-semibold text-white text-lg mb-2">
                    {integration.name}
                  </h3>
                  <p className="font-inter text-sm text-gray-400">
                    {integration.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="font-inter text-gray-400 text-sm">
            More integrations coming soon • Request yours in our beta community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

