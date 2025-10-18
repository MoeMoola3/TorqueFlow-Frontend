import React, { useEffect, useState, useRef } from 'react';

export default function OBDStream() {
  const [messages, setMessages] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    const backendWs = 'wss://obd-api.moemoola.com/register';
    wsRef.current = new WebSocket(backendWs);

    wsRef.current.onopen = () => {
      console.log('✅ WebSocket connection established');

      setTimeout(() => {
        if (wsRef.current) {
          console.log('🕓 Closing WebSocket after 20 seconds');
          wsRef.current.close();
        }
      }, 20000);
    };

    wsRef.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [data, ...prev].slice(0, 100));
      } catch (e) {
        setMessages((prev) => [event.data, ...prev].slice(0, 100));
      }
    };

    wsRef.current.onclose = () => console.log('❌ WebSocket closed');
    wsRef.current.onerror = (err) => console.error('⚠️ WebSocket error', err);

    // 🧹 Cleanup when component unmounts
    return () => {
      if (wsRef.current) {
        console.log('🧹 Cleaning up WebSocket');
        wsRef.current.close();
      }
    };
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>OBD Live Stream (Auto stops after 20s)</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {messages.map((msg, i) => (
          <li key={i}>
            <pre
              style={{
                margin: 0,
                background: '#f6f8fa',
                padding: '4px',
                borderRadius: '4px',
              }}
            >
              {JSON.stringify(msg, null, 2)}
            </pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
