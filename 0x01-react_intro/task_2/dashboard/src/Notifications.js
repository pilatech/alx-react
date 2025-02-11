import React from 'react';
import './Notifications.css';
import CloseIcon from './close-icon.png'
import { getLatestNotification } from './utils';

export default function Notification(){
    function handleClose(){
        console.log('Close button has been clicked')
    }
    return (
        <div className="Notifications">
            <button onClick={handleClose} aria-label='Close' style={{
                position: 'absolute',
                right: '10px',
                top: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
            }}>
                <img src={CloseIcon} width={20} alt="close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}