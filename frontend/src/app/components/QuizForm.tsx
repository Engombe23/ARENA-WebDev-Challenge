'use client'

import { useState } from "react";
import Link from "next/link";

type FormDataType = {
  fullName: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  location: string;
  favouriteSports: string[];
  customSport: string;
}

const QuizForm = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    location: "",
    favouriteSports: [],
    customSport: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
  };

  const handleSportChange = (e: any) => {
    const { value } = e.target;
    setFormData((prevState) => {
        const updatedSports = prevState.favouriteSports.includes(value)
            ? prevState.favouriteSports.filter((sport) => sport !== value)
            : [...prevState.favouriteSports, value];
        return { ...prevState, favouriteSports: updatedSports };
    });
}


  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Sports Form</h1>

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder=""
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        required/>
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={(e) => setFormData({...formData, gender: e.target.value})}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
      </div>
    
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required/>
      </div>
      
      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>
            <option value="north">North London</option>
            <option value="south">South London</option>
            <option value="east">East London</option>
            <option value="west">West London</option>
            <option value="central">Central London</option>
        </select>
      </div>

    
      <div className="mb-4">
        <label htmlFor="favouriteSports" className="block text-sm font-medium text-gray-700">
          Favourite Sports
        </label>
        <select
          multiple
          id="favouriteSports"
          name="favouriteSports"
          value={formData.favouriteSports}
          onChange={handleSportChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
            <option value="football">Football</option>
            <option value="tennis">Tennis</option>
            <option value="basketball">Basketball</option>
        </select>
        <input
            type="text"
            placeholder="Custom sport (optional)"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <Link href={"/sessions"}><button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">{loading ? 'Loading...': 'Get Sessions'}</button></Link>
    </form>
  );
};

export default QuizForm;