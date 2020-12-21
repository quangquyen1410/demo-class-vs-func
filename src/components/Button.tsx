import React, { useEffect } from 'react'

const Button = () => {
    useEffect(() => {
        return () => {
            console.log('useEffect return + deps trống <=> WillUnMount - Sẽ chạy khi bị remove');
        }
    }, [])
    return (
        <div>
            <button>Button Demo UnMount</button>
        </div>
    )
}
export default Button;
