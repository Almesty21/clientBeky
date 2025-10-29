import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubscriptionsList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('/api/subscriptions');
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl mb-6">Subscribers</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <li key={subscription._id}>{subscription.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionsList;
