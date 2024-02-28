import React from 'react';

function Footer() {
    return (
        <div className="py-5 text-center">
            <p className="text-dm mt-2 opacity-50">
                &copy; {new Date().getFullYear()} Regina B. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;