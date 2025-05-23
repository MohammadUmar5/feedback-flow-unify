
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finally, one place to see what users are actually saying. The clustering feature is a game-changer.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      avatar: "👩‍💻"
    },
    {
      quote: "We went from spending hours collecting feedback to having insights in minutes. Essential for any product team.",
      author: "Marcus Rodriguez", 
      role: "Founder",
      company: "BuildSpace",
      avatar: "👨‍🚀"
    },
    {
      quote: "The emotion detection and prioritization helps us focus on what matters most to our users.",
      author: "Elena Vasquez",
      role: "Head of UX",
      company: "UserFirst",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
            Loved by <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Early Teams</span>
          </h2>
          <p className="font-inter text-gray-300 text-lg max-w-2xl mx-auto">
            Join forward-thinking teams already using our platform to make better product decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="
                bg-black/40 backdrop-blur-lg border border-gray-700/30 
                rounded-2xl p-8 hover:border-purple-400/30
                hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
                transition-all duration-300 hover:scale-105
                group
              "
            >
              <div className="relative">
                {/* Quote */}
                <div className="text-4xl text-purple-400 mb-4 opacity-50">"</div>
                <p className="font-inter text-gray-200 text-lg leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="font-inter text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
