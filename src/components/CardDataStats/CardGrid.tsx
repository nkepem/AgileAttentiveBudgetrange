import React from 'react';
import Card from './CardDataStats';

const CardGrid = () => {
  const cards = [
    {
      imageSrc: '/images/person1.jpg',
      name: 'Jane Doe',
      role: 'Software Engineer',
      cardImageSrc: '/images/project1.jpg',
      cardTitle: 'Project Alpha',
      cardContent: 'Developing a cutting-edge application for managing workflows efficiently.',
    },
    {
      imageSrc: '/images/person2.jpg',
      name: 'John Smith',
      role: 'UI/UX Designer',
      cardImageSrc: '/images/project2.jpg',
      cardTitle: 'Design Studio',
      cardContent: 'Crafting user-friendly interfaces and improving user experience across platforms.',
    },
    {
      imageSrc: '/images/person3.jpg',
      name: 'Alice Johnson',
      role: 'Product Manager',
      cardImageSrc: '/images/project3.jpg',
      cardTitle: 'Product Launch',
      cardContent: 'Overseeing the launch of an innovative product aimed at the tech industry.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
