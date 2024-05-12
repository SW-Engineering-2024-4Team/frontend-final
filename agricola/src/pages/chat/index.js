import React, { useState, useEffect } from 'react';
import axios from "axios";
import { socket } from "../../socket"; // 이 부분이 올바른 경로인가요?

const ChatPage = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [transport, setTransport] = useState("N/A");
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [userId, setUserId] = useState(+new Date());

    useEffect(() => {
        if (!socket) return; // 소켓이 없으면 리턴

        // 소켓 연결 상태 변화 감지
        const handleConnect = () => {
            setIsConnected(true);
            setTransport(socket.io.engine.transport.name);
        };

        const handleDisconnect = () => {
            setIsConnected(false);
            setTransport("N/A");
        };

        // 메시지 수신
        const handleMessage = (data) => {
            setMessages((messages) => [...messages, data]);
        };

        socket.on("connect", handleConnect);
        socket.on("disconnect", handleDisconnect);
        socket.on("message", handleMessage);

        return () => {
            // 이펙트 정리
            socket.off("connect", handleConnect);
            socket.off("disconnect", handleDisconnect);
            socket.off("message", handleMessage);
        };
    }, [socket]); // 소켓 객체가 바뀔 때만 이펙트 재실행

    // 메시지 전송
    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/api/chat', {
            userId: userId,
            content: currentMessage
        });
        setCurrentMessage('');
    };

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow w-[300px] mx-auto">
            <div className="p-6">
                <p>{isConnected ? "연결 완료" : "연결중"}</p>
            </div>
            <div className="p-6 pt-0">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} className={"flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm " +
                            (message.userId !== userId ? "ml-auto bg-blue-400 text-white": "bg-zinc-100") }>
                            {message.content}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex items-center p-6 pt-0">
                <form className="flex w-full items-center space-x-2">
                    <input
                        type="text"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1">
                    </input>
                    <button type="submit"
                            onClick={(e) => sendMessage(e)}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-primary/90 h-9 w-9">
                        전송
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatPage;
