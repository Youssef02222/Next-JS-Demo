'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  image: string;
  last_login: string | null;
  first_name: string;
  last_name: string;
  date_joined: string;
  created: string;
  updated: string;
  uip: string | null;
  bio: string;
  cover: string;
  contract_email: string | null;
  contract_number: string | null;
  groups: string[];
  user_permissions: string[];
}

const ProfilePage = () => {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Fetch the profile data from the API
    axios.get('https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/',{ headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODYxOTAxLCJpYXQiOjE3MjUyNjk5MDEsImp0aSI6IjQ2YTQxYTA3MTVmZjRlNWNiMDQ3ZTNlYWZiZGFlNTIyIiwidXNlcl9pZCI6MjJ9.W44leTILk3auMyj26MvyXU_qsjgqEllrlu5uEtEnIf0`} })
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${profile.cover})` }} />
        {/* Profile Information */}
        <div className="absolute top-44 left-10">
          <div className="flex items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={profile.image}
                alt={`${profile.first_name} ${profile.last_name}`}
                width={144}
                height={144}
                objectFit="cover"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-semibold text-gray-800">{`${profile.first_name} ${profile.last_name}`}</h1>
              <p className="text-gray-600">{profile.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="container mx-auto mt-16 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Name</p>
            <p className="text-gray-800 font-medium">{`${profile.first_name} ${profile.last_name}`}</p>
          </div>
          <div>
            <p className="text-gray-600">Email Address</p>
            <p className="text-gray-800 font-medium">{profile.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <p className="text-gray-800 font-medium">{profile.phone}</p>
          </div>
          <div>
            <p className="text-gray-600">Date of Birth</p>
            <p className="text-gray-800 font-medium">{new Date(profile.date_joined).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Bio</p>
            <p className="text-gray-800 font-medium">{profile.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

