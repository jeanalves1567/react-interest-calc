import React from 'react';

export default function Header({ children }) {
    return (
        <div>
            <h1 className="center">{children}</h1>
        </div>
    );
}
