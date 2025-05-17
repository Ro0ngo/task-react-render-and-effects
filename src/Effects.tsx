import { subscribe, unsubscribe } from './resources/API';
import React, { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const { sourceId } = props;
    const [lastMessage, setLastMessage] = useState<number>(-1);

    useEffect(() => {
        const handleMessage = (message: number) => {
            setLastMessage(message);
        };
        subscribe(sourceId, handleMessage);
        return () => {
            unsubscribe(sourceId, handleMessage);
            setLastMessage(-1);
        };
    }, [sourceId]);

    return (
        <div>
            {sourceId}: {lastMessage}
        </div>
    );
}
