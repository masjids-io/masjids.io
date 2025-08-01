'use client'

import { Button, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import PageTitle from '@/components/PageTitle'
import type { Metadata } from 'next'
import Image from 'next/image'
import avatar1 from '@/assets/images/users/avatar-1.jpg' // Assuming you have this asset
import IconifyIcon from '@/components/wrappers/IconifyIcon' // Assuming you have this component

// Updated type to match the data structure from your API
type UserProfile = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  // Role is not in the update payload, so it can be optional or removed if not displayed
  role?: string;
};

const Profile = () => {
  // State to hold user data and form inputs
  const [userData, setUserData] = useState<UserProfile | null>(null);
  // State for loading, errors, and submission status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');


  // Fetch initial user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Corrected the API endpoint to /api/me based on our previous work
        const response = await fetch('/api/profile/me');
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch user data');
        }
        const result = await response.json();
        // The API returns data inside a `getUserResponse` object
        if (result.getUserResponse) {
          setUserData(result.getUserResponse);
        } else {
          throw new Error('User data not found in API response');
        }
      } catch (err: any) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // Handler for form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (userData) {
      setUserData({ ...userData, [name]: value });
    }
  };

  // Handler for submitting the form to update the profile
  const handleUpdateProfile = async () => {
    if (!userData) return;

    setIsSaving(true);
    setSaveStatus('');
    setError(null);

    try {
      // Send a PATCH request to our API route
      const response = await fetch('/api/profile/update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        // Send the fields that can be updated
        body: JSON.stringify({
            email: userData.email,
            username: userData.username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phoneNumber,
            gender: userData.gender,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details?.message || 'Failed to update profile.');
      }

      setSaveStatus('Profile updated successfully!');
      // Clear the success message after 3 seconds
      setTimeout(() => setSaveStatus(''), 3000);

    } catch (err: any) {
      setError(err.message);
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  // Render loading or error states
  if (loading) return <div>Loading profile...</div>;
  if (error && !userData) return <div className="alert alert-danger">Error: {error}</div>;
  if (!userData) return <div>No profile data found.</div>;

  return (
    <>
      <PageTitle title="Profile" />
      <Row>
        <Col sm={12}>
          <div className="profile-bg-picture" style={{ backgroundImage: 'url("/img/forms/bg.png")', backgroundPosition: 'bottom', height: '150px', backgroundSize: 'cover' }} />
          <div className="p-sm-3 p-0 profile-user">
            <Row className="g-2">
              <Col lg={3} className="d-none d-lg-block">
                <div className="profile-user-img p-2 text-start mt-n5">
                  <Image src={avatar1} alt="avatar" className="img-thumbnail avatar-lg rounded" />
                </div>
                <div className="text-start p-1 pt-2">
                  <h4 className=" fs-17 ellipsis">{`${userData.firstName} ${userData.lastName}`}</h4>
                  {userData.role && <p className="font-13 text-capitalize">{userData.role.replace('_', ' ')}</p>}
                </div>
              </Col>
              <Col lg={9} className="bg-light-subtle p-3">
                <Row>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="username">Username</label>
                        <input id="username" name="username" type="text" className="form-control" value={userData.username} onChange={handleInputChange} />
                    </Col>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" className="form-control" value={userData.email} onChange={handleInputChange} />
                    </Col>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="firstName">First name</label>
                        <input id="firstName" name="firstName" type="text" className="form-control" value={userData.firstName} onChange={handleInputChange} />
                    </Col>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="lastName">Last name</label>
                        <input id="lastName" name="lastName" type="text" className="form-control" value={userData.lastName} onChange={handleInputChange} />
                    </Col>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="phoneNumber">Phone number</label>
                        <input id="phoneNumber" name="phoneNumber" type="text" className="form-control" value={userData.phoneNumber} onChange={handleInputChange} />
                    </Col>
                    <Col md={6} className="mb-2">
                        <label className='mb-2' htmlFor="gender">Gender</label>
                        <select name="gender" className="form-select" value={userData.gender} onChange={handleInputChange}>
                            <option value="GENDER_UNSPECIFIED">Unspecified</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>
                    </Col>
                </Row>
                <div className="mt-3 text-end">
                    <Button variant='primary' onClick={handleUpdateProfile} disabled={isSaving}>
                        {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                </div>
                 {/* Display feedback messages to the user */}
                 {error && <div className="alert alert-danger mt-3">{error}</div>}
                 {saveStatus && <div className="alert alert-success mt-3">{saveStatus}</div>}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Profile
