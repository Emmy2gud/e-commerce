import React from 'react'
import ProfileHeader from '../components/ProfileHeader '
import UserStats from '../components/UserStats'
import UserWishlist from '../components/UserWishlist'
import UserActivity from '../components/UserActivity'
import UserPreferences from '../components/UserPreferences'

const Profile = () => {
  return (
    <div> 
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
 
      <ProfileHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-18">
      
        {/* <div className="mb-8">
          <UserStats />
        </div> */}

     
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 ">
        
          <div className="xl:col-span-2 space-y-8">
            <UserWishlist />
            <UserActivity />
          </div>
          
    
          <div className="xl:col-span-1 space-y-8">
            <UserPreferences />
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Profile