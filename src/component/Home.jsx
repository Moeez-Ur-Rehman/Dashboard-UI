import React from 'react'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Section
        type="hero"
        title="Welcome to Our Product"
        description="Start managing your tasks effectively with us today."
        buttons={[
          { text: 'Get Started', className: 'bg-white text-blue-500 px-6 py-2 rounded hover:bg-blue-100 transition' },
          { text: 'Learn More', className: 'bg-transparent border-white border px-6 py-2 rounded hover:bg-white hover:text-blue-500 transition' },
        ]}
        bgColor="bg-blue-500 text-white"
      />
      <Section
        type="features"
        title="Our Features"
        features={[
          { title: 'Feature One', description: 'Lorem ipsum dolor sit amet.' },
          { title: 'Feature Two', description: 'Ut enim ad minim veniam.' },
          { title: 'Feature Three', description: 'Quis nostrud exercitation ullamco.' }
        ]}
        bgColor="bg-gray-50 text-gray-800"
      />
      
    </div>
  
      );
  
}
const Section = ({ type, title, description, buttons, features, bgColor }) => {
    return (
      <section className={`${bgColor} py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h3 className={`text-3xl font-bold ${type === 'hero' ? 'text-4xl' : ''}`}>{title}</h3>
          {type === 'hero' && (
            <>
              <p className="mt-4 text-lg">{description}</p>
              <div className="mt-8 space-x-4">
                {buttons && buttons.map((button, idx) => (
                  <button key={idx} className={button.className}>{button.text}</button>
                ))}
              </div>
            </>
          )}
          {type === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features && features.map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
                  <h4 className="text-2xl font-bold">{feature.title}</h4>
                  <p className="mt-4 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  };

export default Home

