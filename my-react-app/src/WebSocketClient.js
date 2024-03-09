import { useEffect, useState } from 'react';

const WebSocketClient = () => {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('wss://3000-jmc818386-datafrontend-liw7fygd7fv.ws-us107.gitpod.io:3000/ws');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('WebSocket connection opened:', event);
      // You can send messages here if needed
      // socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', (event) => {
      console.log('Message from server:', event.data);
    });

    // Listen for possible errors
    socket.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    // Connection closed
    socket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
    });

    // Update state
    setWs(socket);

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  // Return WebSocket instance for external use if needed
  return ws;
};

export default WebSocketClient;
