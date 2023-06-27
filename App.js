import 'expo-dev-client';
import React, { useState } from 'react';
import AgoraUIKit, { PropsInterface } from 'agora-rn-uikit';

const App = () => {
  const connectionData = {
    appId: 'd23dfacb5bb24d3ca261e5367897e4b7',
    channel: 'n3',
    token: '007eJxTYLCra1c9O1Xb8M3bv3sev5ko3KcYtmwOy0qpb7e2vgqMbHBTYEgxMk5JS0xOMk1KMjJJMU5ONDIzTDU1NjO3sDRPNUkyF7k+K6UhkJFB4a8uCyMDBIL4TAx5xgwMAJc9H/s=', // enter your channel token as a string 
  };
  return (
    <AgoraUIKit connectionData={connectionData} />
  )
}

export default App;