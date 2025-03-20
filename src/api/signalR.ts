import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const useChat = (token) => {
    const [messages, setMessages] = useState([]);
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(`https://api.tapta.online/chatHub`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Thêm header Authorization
                },
            })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);

        newConnection.start()
            .then(() => console.log('SignalR Connected!'))
            .catch((err) => console.error('SignalR Connection Error: ', err));

        newConnection.on('ReceiveMessage', (user, message) => {
            setMessages((prevMessages) => [...prevMessages, { user, message }]);
        });

        return () => {
            newConnection.stop();
        };
    }, [token]);

    const sendMessage = async (message) => {
        if (connection) {
            await connection.invoke('SendMessage', 'YourUsername', message);
        }
    };

    return { messages, sendMessage };
};

export default useChat;