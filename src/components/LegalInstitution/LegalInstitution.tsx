// components/LegalInstitutions.tsx
'use client';

const items = [
  { title: 'Contexte', description: 'The foundation of legal principles in our country.' },
  { title: 'Vision', description: 'Laws that govern societal operations and interactions.' },
  { title: 'Justification', description: 'Specific administrative or legal rulings.' },
  { title: 'Objectifs', description: 'Decrees issued by government authorities.' },
  { title: 'Objectifs spécifiques', description: 'Rules ensuring proper conduct and compliance.' },
];

const colors = [
  'bg-red-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
];

const LegalInstitutions = () => {
  return (
    <section
  id="instruments"
  className="min-h-screen flex items-center justify-center relative bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: "url(/organizations-bg.jpg)", // Replace with your image path
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Accordion Container */}
  <div className="relative w-full max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-center mb-6 text-secondary">Instruments Juridiques</h2>
    {items.map((item, index) => {
      // Define a set of colors to cycle through
      const colors = [
        'bg-red-200',
        'bg-blue-200',
        'bg-green-200',
        'bg-yellow-200',
        'bg-purple-200',
      ];

      // Select color based on index
      const color = colors[index % colors.length];

      return (
        <div
          className={`collapse collapse-plus ${color} rounded-lg mb-4`}
          key={index}
        >
          {/* Accordion Title */}
          <input type="radio" name="accordion" defaultChecked={index === 0} />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            {item.title}
          </div>

          {/* Accordion Content */}
          <div className="collapse-content text-gray-600">
            <p>{item.description}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>

  );
    
  };
  
  export default LegalInstitutions;
  