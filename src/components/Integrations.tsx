
const Integrations = () => {
  const integrations = [
    { name: "Reddit", icon: "🟠", category: "Social" },
    { name: "Twitter", icon: "🐦", category: "Social" },
    { name: "Slack", icon: "💬", category: "Communication" },
    { name: "Typeform", icon: "📝", category: "Forms" },
    { name: "SurveyMonkey", icon: "🐵", category: "Forms" },
    { name: "Google Forms", icon: "📊", category: "Forms" },
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
          Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Integrations</span>
        </h2>
        <p className="font-inter text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          Connect with the platforms you already use to capture feedback from every corner of the web
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={integration.name}
              className="group"
            >
              <div className="
                bg-black/40 backdrop-blur-lg border border-gray-700/50 
                rounded-xl p-6 hover:border-cyan-400/30 
                hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]
                transition-all duration-300 hover:scale-110
              ">
                <div className="text-4xl mb-3">
                  {integration.icon}
                </div>
                <h3 className="font-inter font-semibold text-white text-sm mb-1">
                  {integration.name}
                </h3>
                <p className="font-inter text-xs text-gray-400">
                  {integration.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-inter text-gray-400 text-sm">
            More integrations coming soon • Request yours in our community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
