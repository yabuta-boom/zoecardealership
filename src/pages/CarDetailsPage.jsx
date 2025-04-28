import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  const mockInventory = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: 89900,
      year: 2024,
      mileage: 12,
      body: 'Sedan',
      hwy: '38 MPG',
      city: '26 MPG',
      exterior: 'Soul Red Metallic',
      interior: 'Black',
      engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
      transmission: '6-Speed Automatic',
      description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    },
    // Add all 15 cars here with their details
  ];

  useEffect(() => {
    const selectedCar = mockInventory.find((item) => item.id === parseInt(id));
    setCar(selectedCar || null);
  }, [id]);

  if (!car) {
    return <div className="p-6 text-center">Car not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <p className="text-lg text-gray-700 mb-6">{car.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Mileage:</strong> {car.mileage} miles</p>
          <p><strong>Body:</strong> {car.body}</p>
          <p><strong>HWY:</strong> {car.hwy}</p>
          <p><strong>City:</strong> {car.city}</p>
        </div>
        <div>
          <p><strong>Exterior:</strong> {car.exterior}</p>
          <p><strong>Interior:</strong> {car.interior}</p>
          <p><strong>Engine:</strong> {car.engine}</p>
          <p><strong>Transmission:</strong> {car.transmission}</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;