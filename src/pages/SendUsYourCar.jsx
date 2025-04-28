import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SendUsYourCar() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to track uploaded files

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log('Form Data:', data);
      setSubmitStatus('success');
      reset();
      setUploadedFiles([]); // Clear uploaded files on successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
  };

  return (
    <div className="w-full pt-24">
      {/* Blue Banner Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Send Us Your Car</h1>
          <p className="text-lg">
            Submit your car details, and we’ll review it for potential listing on our platform.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Car Submission Form</h2>
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Your car details have been submitted successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              There was an error submitting your car details. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Body *</label>
              <input
                {...register('body', { required: 'Body is required' })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="e.g., Sedan, SUV"
              />
              {errors.body && <p className="text-red-500 text-xs mt-1">{errors.body.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mileage *</label>
              <input
                {...register('mileage', { required: 'Mileage is required', min: 0 })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="number"
                placeholder="e.g., 12000"
              />
              {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">HWY MPG *</label>
              <input
                {...register('hwy', { required: 'HWY MPG is required', min: 0 })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="number"
                placeholder="e.g., 30"
              />
              {errors.hwy && <p className="text-red-500 text-xs mt-1">{errors.hwy.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City MPG *</label>
              <input
                {...register('city', { required: 'City MPG is required', min: 0 })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="number"
                placeholder="e.g., 25"
              />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Exterior *</label>
              <input
                {...register('exterior', { required: 'Exterior is required' })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="e.g., Red Metallic"
              />
              {errors.exterior && <p className="text-red-500 text-xs mt-1">{errors.exterior.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interior *</label>
              <input
                {...register('interior', { required: 'Interior is required' })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="e.g., Black Leather"
              />
              {errors.interior && <p className="text-red-500 text-xs mt-1">{errors.interior.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Engine *</label>
              <input
                {...register('engine', { required: 'Engine is required' })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="e.g., 3.0L V6 Turbocharged"
              />
              {errors.engine && <p className="text-red-500 text-xs mt-1">{errors.engine.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transmission *</label>
              <input
                {...register('transmission', { required: 'Transmission is required' })}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                type="text"
                placeholder="e.g., Automatic"
              />
              {errors.transmission && <p className="text-red-500 text-xs mt-1">{errors.transmission.message}</p>}
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Pictures and Video *</label>
              <div className="flex flex-col gap-4">
                <input
                  {...register('pictures', {
                    required: 'At least one picture is required',
                    validate: (files) => {
                      if (files.length > 5) return 'You can upload up to 5 files only';
                      return true;
                    },
                  })}
                  className="hidden"
                  id="upload-files"
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleFileChange} // Track file changes
                />
                <label
                  htmlFor="upload-files"
                  className="cursor-pointer bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center w-fit"
                >
                  Choose Files
                </label>
                <p className="text-sm text-gray-500">You can upload up to 5 pictures or videos.</p>
                {uploadedFiles.length > 0 && (
                  <div className="text-sm text-gray-700 mt-2">
                    <p>{uploadedFiles.length} file(s) selected:</p>
                    <ul className="list-disc list-inside">
                      {uploadedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {errors.pictures && <p className="text-red-500 text-xs mt-1">{errors.pictures.message}</p>}
              </div>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Car'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}