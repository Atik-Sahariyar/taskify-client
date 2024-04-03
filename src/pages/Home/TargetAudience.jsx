const TargetAudience = () => {

    const audienceTypes = [
      {
        title: 'Developers',
        description: 'Efficiently manage tasks, collaborate with teams, and track progress.',
        icon: '💻',
      },
      {
        title: 'Corporate Professionals',
        description: 'Streamline workflow, assign tasks, and improve productivity across departments.',
        icon: '👔',
      },
      {
        title: 'Bankers',
        description: 'Organize financial tasks, set priorities, and enhance team coordination.',
        icon: '💼',
      },
      {
        title: 'Freelancers',
        description: 'Manage freelance projects, deadlines, and client communications efficiently.',
        icon: '🌐',
      },
      {
        title: 'Students',
        description: 'Organize study tasks, collaborate on projects, and track academic progress.',
        icon: '🎓',
      },
      {
        title: 'Students',
        description: 'Organize study tasks, collaborate on projects, and track academic progress.',
        icon: '🎓',
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Who Can Benefit from Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audienceTypes.map((audience, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <span className="text-4xl mb-4">{audience.icon}</span>
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-center">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TargetAudience;
  