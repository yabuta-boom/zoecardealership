import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

const InventoryPage = () => {
  const inventory = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: 89900,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 12,
      condition: 'New',
      features: ['Premium Package', 'Executive Rear Seat', 'Burmester 3D Sound'],
      description: 'The Mercedes-Benz S-Class is the epitome of luxury and performance.',
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: 93400,
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 8,
      condition: 'Used',
      features: ['M Sport Package', 'Executive Lounge', 'Bowers & Wilkins Sound'],
      description: 'The BMW 7 Series combines cutting-edge technology with unmatched comfort.',
    },
    {
      id: 3,
      name: 'Audi RS e-tron GT',
      price: 104900,
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 5,
      condition: 'New',
      features: ['Carbon Fiber Package', 'Bang & Olufsen Sound', 'Sport Chrono Package'],
      description: 'The Audi RS e-tron GT is a high-performance electric vehicle with stunning design.',
    },
    {
      id: 4,
      name: 'Tesla Model S',
      price: 79900,
      image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2023,
      mileage: 0,
      condition: 'New',
      features: ['Autopilot', 'Long Range Battery', 'Premium Interior'],
      description: 'The Tesla Model S is a fully electric luxury sedan with cutting-edge technology.',
    },
    {
      id: 5,
      name: 'Porsche Taycan',
      price: 103800,
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 3,
      condition: 'New',
      features: ['Performance Battery Plus', 'Adaptive Cruise Control', 'Sport Chrono Package'],
      description: 'The Porsche Taycan is a high-performance electric sports car with stunning design.',
    },
    {
      id: 6,
      name: 'Range Rover Velar',
      price: 69900,
      image: 'https://images.pexels.com/photos/1149832/pexels-photo-1149832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2023,
      mileage: 15,
      condition: 'New',
      features: ['Panoramic Roof', 'Meridian Sound System', 'Terrain Response'],
      description: 'The Range Rover Velar is a luxury SUV with a sleek design and advanced features.',
    },
    {
      id: 7,
      name: 'Lexus RX 500h',
      price: 58900,
      image: 'https://images.pexels.com/photos/1149833/pexels-photo-1149833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 10,
      condition: 'New',
      features: ['Hybrid Powertrain', 'Mark Levinson Audio', 'Advanced Safety Features'],
      description: 'The Lexus RX 500h is a hybrid luxury SUV with exceptional comfort and efficiency.',
    },
    {
      id: 8,
      name: 'Ford Mustang Mach-E',
      price: 52900,
      image: 'https://images.pexels.com/photos/1149834/pexels-photo-1149834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2023,
      mileage: 0,
      condition: 'New',
      features: ['Electric Powertrain', 'SYNC 4A', 'Panoramic Fixed-Glass Roof'],
      description: 'The Ford Mustang Mach-E is an all-electric SUV with iconic Mustang styling.',
    },
    {
      id: 9,
      name: 'Chevrolet Corvette Stingray',
      price: 65900,
      image: 'https://images.pexels.com/photos/1149835/pexels-photo-1149835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 5,
      condition: 'New',
      features: ['Mid-Engine Design', 'Performance Exhaust', 'Z51 Performance Package'],
      description: 'The Chevrolet Corvette Stingray is a high-performance sports car with a mid-engine layout.',
    },
    {
      id: 10,
      name: 'Toyota Land Cruiser',
      price: 85900,
      image: 'https://images.pexels.com/photos/1149836/pexels-photo-1149836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 20,
      condition: 'New',
      features: ['Off-Road Capability', 'Toyota Safety Sense', 'Premium Interior'],
      description: 'The Toyota Land Cruiser is a rugged SUV with legendary off-road performance.',
    },
    {
      id: 11,
      name: 'BMW X5',
      price: 65900,
      image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 0,
      condition: 'New',
      features: ['All-Wheel Drive', 'Luxury Interior', 'Advanced Safety Features'],
      description: 'The BMW X5 is a luxury SUV with a perfect blend of performance and comfort.',
    },
    {
      id: 12,
      name: 'Audi Q8',
      price: 72900,
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 10,
      condition: 'New',
      features: ['Quattro All-Wheel Drive', 'Bang & Olufsen Sound', 'Panoramic Sunroof'],
      description: 'The Audi Q8 is a luxury SUV with cutting-edge technology and a bold design.',
    },
    {
      id: 13,
      name: 'Mercedes-Benz GLE',
      price: 75900,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 5,
      condition: 'New',
      features: ['4MATIC All-Wheel Drive', 'Luxury Interior', 'Advanced Safety Features'],
      description: 'The Mercedes-Benz GLE is a luxury SUV with a perfect blend of performance and comfort.',
    },
    {
      id: 14,
      name: 'Tesla Model X',
      price: 99900,
      image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 0,
      condition: 'New',
      features: ['Autopilot', 'Long Range Battery', 'Falcon Wing Doors'],
      description: 'The Tesla Model X is a luxury electric SUV with advanced features and exceptional performance.',
    },
    {
      id: 15,
      name: 'Jaguar F-Pace',
      price: 69900,
      image: 'https://images.pexels.com/photos/1149832/pexels-photo-1149832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 12,
      condition: 'New',
      features: ['Panoramic Roof', 'Meridian Sound System', 'Adaptive Dynamics'],
      description: 'The Jaguar F-Pace is a luxury SUV with a sleek design and advanced features.',
    },
  ];

  const [filters, setFilters] = useState({ model: '', year: '', minPrice: '', maxPrice: '', condition: '' });
  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6; // 3 columns x 2 rows

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleFilterChange = (filters) => {
    const filtered = inventory.filter((car) => {
      return (
        (filters.model === '' || car.name.includes(filters.model)) &&
        (filters.year === '' || car.year.toString() === filters.year) &&
        (!filters.minPrice || car.price >= parseFloat(filters.minPrice)) &&
        (!filters.maxPrice || car.price <= parseFloat(filters.maxPrice)) &&
        (filters.condition === '' || car.condition === filters.condition)
      );
    });
    setFilteredInventory(filtered);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredInventory.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(filteredInventory.length / carsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    handleFilterChange(updatedFilters);
  };

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="relative bg-blue-600 text-white py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800 opacity-90"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Find Your Perfect Car
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
          Explore a wide selection of vehicles tailored to your needs and lifestyle.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Model Filter */}
            <div>
              <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                Model
              </label>
              <select
                id="model"
                name="model"
                value={filters.model}
                onChange={handleInputChange}
                className="p-3 border rounded w-48"
              >
                <option value="">All Models</option>
                {[...new Set(inventory.map((car) => car.name))].map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <select
                id="year"
                name="year"
                value={filters.year}
                onChange={handleInputChange}
                className="p-3 border rounded w-48"
              >
                <option value="">All Years</option>
                {[...new Set(inventory.map((car) => car.year))].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price Filter */}
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Min Price
              </label>
              <input
                type="number"
                id="minPrice"
                name="minPrice"
                value={filters.minPrice}
                onChange={handleInputChange}
                placeholder="Min Price"
                className="p-3 border rounded w-48"
              />
            </div>

            {/* Max Price Filter */}
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <input
                type="number"
                id="maxPrice"
                name="maxPrice"
                value={filters.maxPrice}
                onChange={handleInputChange}
                placeholder="Max Price"
                className="p-3 border rounded w-48"
              />
            </div>

            {/* Condition Filter */}
            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                Condition
              </label>
              <select
                id="condition"
                name="condition"
                value={filters.condition}
                onChange={handleInputChange}
                className="p-3 border rounded w-48"
              >
                <option value="">All Conditions</option>
                {[...new Set(inventory.map((car) => car.condition))].map((condition) => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Button */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilters({ model: '', year: '', minPrice: '', maxPrice: '', condition: '' });
                  handleFilterChange({ model: '', year: '', minPrice: '', maxPrice: '', condition: '' });
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory List */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCars.map((car) => (
              <div
                key={car.id}
                className="card group overflow-hidden shadow-lg rounded-lg bg-white transition-shadow hover:shadow-xl"
              >
                {/* Car Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Car Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-lg font-semibold text-primary-600">{formatPrice(car.price)}</p>
                  </div>

                  <div className="flex text-sm text-neutral-500 mb-4">
                    <span className="mr-4">{car.year}</span>
                    <span>{car.mileage.toLocaleString()} miles</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/inventory/${car.id}`}
                    className="text-white bg-blue-600 font-medium flex items-center justify-center px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto flex justify-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;