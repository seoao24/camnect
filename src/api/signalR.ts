import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";

const hubUrl = `${process.env.NEXT_PUBLIC_API_URL}/chatHub`;

let connection: signalR.HubConnection | null = null;

export const connectSignalR = async (
    onMessageReceived: (user: string, message: string) => void
) => {
    const token = Cookies.get('access-key');
    connection = new signalR.HubConnectionBuilder()
        // .withUrl(hubUrl, {
        //     withCredentials: true, // Cho phép gửi cookie hoặc authentication token
        //     transport: signalR.HttpTransportType.WebSockets
        // })
        .withUrl(hubUrl, {
            accessTokenFactory: () => {
                const token = Cookies.get('access-key');
                console.log("🔑 Sending Token:", token);
                return token ? `Bearer ${token}` : ""; // Trả về rỗng nếu không có token
            },
            withCredentials: true,
            transport: signalR.HttpTransportType.WebSockets | signalR.HttpTransportType.LongPolling
        })
        .withAutomaticReconnect()
        .build();

    try {
        await connection.start();
        console.log("✅ SignalR Connected!");

        // Lắng nghe sự kiện từ server
        connection.on("ReceiveMessage", (user: string, message: string) => {
            onMessageReceived(user, message);
        });
    } catch (err) {
        console.error("❌ SignalR Connection Error:", err);
    }
};

export const sendMessage = async (receiverId: string, message: string) => {
    if (!connection) {
        console.error("SignalR connection is not initialized.");
        return;
    }

    if (connection.state !== signalR.HubConnectionState.Connected) {
        console.error("SignalR is not connected. Waiting to reconnect...");
        await connection.start(); // Thử kết nối lại
    }

    try {
        await connection.invoke("SendMessage", receiverId, message);
    } catch (error) {
        console.error("Error sending message:", error);
    }
};

