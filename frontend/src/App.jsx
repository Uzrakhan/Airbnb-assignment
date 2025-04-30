import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [listings,setListings] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
    .then(res => setListings(res.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Airbnb Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {listings.map(listing => (
          <div key={listing.id} className="border p-4 rounded-lg">
            <h2 className="font-bold">{listing.title}</h2>
            <p>{listing.location}</p>
            <p>₹{listing.price_per_night}/night</p>
            <p>⭐ {listing.ratings}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
