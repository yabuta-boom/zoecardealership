import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockInventory = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    price: 93400,
    year: 2024,
    make: 'BMW',
    model: '7 Series',
    trim: 'Luxury',
    body: 'Sedan',
    mileage: 8732,
    fuelEconomy: { hwy: '35 MPG', city: '24 MPG' },
    exterior: 'Alpine White',
    interior: 'Beige Leather',
    engine: '3.0L I6 Turbocharged',
    transmission: '8-Speed Automatic',
    driveType: 'All-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WBAGF8C54KB123456',
    stockNumber: 'BMW12345',
    doors: 4,
    passengers: 5,
    condition: 'Used',
    description: 'The BMW 7 Series combines cutting-edge technology with unmatched comfort.',
    images: [
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/bmw-7-series.mp4',
  },
  {
    id: 3,
    name: 'Audi A8',
    price: 85000,
    year: 2023,
    make: 'Audi',
    model: 'A8',
    trim: 'L 55 TFSI',
    body: 'Sedan',
    mileage: 5000,
    fuelEconomy: { hwy: '30 MPG', city: '22 MPG' },
    exterior: 'Mythos Black Metallic',
    interior: 'Nougat Brown Leather',
    engine: '3.0L V6 Turbocharged',
    transmission: '8-Speed Automatic',
    driveType: 'All-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WAU8DAF8XKN123456',
    stockNumber: 'AUDI12345',
    doors: 4,
    passengers: 5,
    condition: 'Certified Pre-Owned',
    description: 'The Audi A8 offers unparalleled luxury and advanced technology.',
    images: [
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/audi-a8.mp4',
  },
  {
    id: 4,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 5,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 6,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 7,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 8,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 9,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 10,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 11,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 12,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 13,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 14,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  {
    id: 15,
    name: 'Mercedes-Benz S-Class',
    price: 89900,
    year: 2024,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    trim: 'Premium',
    body: 'Sedan',
    mileage: 12732,
    fuelEconomy: { hwy: '38 MPG', city: '26 MPG' },
    exterior: 'Soul Red Metallic',
    interior: 'Black Leather',
    engine: 'SKYACTIV®-G 2.5L I4 DOHC 16V',
    transmission: '6-Speed Automatic',
    driveType: 'Rear-Wheel Drive',
    fuelType: 'Gasoline',
    vin: 'WDDUG8CB5KA123456',
    stockNumber: 'MB12345',
    doors: 4,
    passengers: 5,
    condition: 'New',
    description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg',
      'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
    ],
    video: '/videos/mercedes-s-class.mp4',
  },
  // Add more vehicles here...
];

export default function VehicleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchVehicleDetails = () => {
      const vehicleData = mockInventory.find((veh) => veh.id === parseInt(id, 10));
      setVehicle(vehicleData || null);
      setLoading(false);
    };

    fetchVehicleDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full pt-24 flex justify-center items-center h-[calc(100vh-6rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="w-full pt-24">
        <div className="container mx-auto px-6">
          <h1 className="text-2xl font-bold text-gray-900">Vehicle not found</h1>
        </div>
      </div>
    );
  }

  const handleScheduleTestDrive = () => {
    navigate('/contact', {
      state: {
        note: `I would like to schedule a test drive for the ${vehicle.name} (${vehicle.year}, VIN: ${vehicle.vin}).`,
      },
    });
  };

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative pb-[56.25%] rounded-lg overflow-hidden">
              <img
                src={vehicle.images[activeImage] || 'https://via.placeholder.com/800x600'}
                alt={vehicle.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {vehicle.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative pb-[56.25%] rounded-lg overflow-hidden ${
                    activeImage === index ? 'ring-2 ring-blue-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${vehicle.name} view ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Video Section */}
            <div className="relative pb-[56.25%] rounded-lg overflow-hidden">
              <video
                controls
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={vehicle.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {vehicle.body}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  ${vehicle.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="prose max-w-none">
              <p>{vehicle.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Vehicle Details */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Year</h3>
                <p>{vehicle.year}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Make</h3>
                <p>{vehicle.make}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Model</h3>
                <p>{vehicle.model}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Trim</h3>
                <p>{vehicle.trim}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Mileage</h3>
                <p>{vehicle.mileage.toLocaleString()} miles</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Fuel Economy</h3>
                <p>HWY: {vehicle.fuelEconomy.hwy}, City: {vehicle.fuelEconomy.city}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Exterior</h3>
                <p>{vehicle.exterior}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Interior</h3>
                <p>{vehicle.interior}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Engine</h3>
                <p>{vehicle.engine}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Transmission</h3>
                <p>{vehicle.transmission}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Drive Type</h3>
                <p>{vehicle.driveType}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Fuel Type</h3>
                <p>{vehicle.fuelType}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">VIN</h3>
                <p>{vehicle.vin}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Stock Number</h3>
                <p>{vehicle.stockNumber}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Doors</h3>
                <p>{vehicle.doors} Doors</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Passengers</h3>
                <p>{vehicle.passengers} Passengers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">Condition</h3>
                <p>{vehicle.condition}</p>
              </div>
            </div>

            <button
              onClick={handleScheduleTestDrive}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Schedule Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}