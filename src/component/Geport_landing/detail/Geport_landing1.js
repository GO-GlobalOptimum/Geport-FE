import React, { useEffect } from 'react';

export function Geport_landing1({ nextPage }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            nextPage();
        }, 2000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, [nextPage]);

    return (
        <div style={styles.container}>
            <div style={styles.logoContainer}>
                <img src="./image/geport_blacklogo.png" alt="Geport Logo" style={styles.logo} />
                <div style ={{marginBottom:"20%"}}></div>
                <span>
                    <svg width="120" height="21" viewBox="0 0 120 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M120.002 3.35547H113.096V20.3665H110.57V3.35547H103.641V1.09375H120.002V3.35547Z" fill="black"/>
                        <path d="M101.296 20.3665H98.3126L93.9336 13.5091C93.5727 13.5332 93.2118 13.5573 92.8509 13.5573H88.1591V20.3665H85.6328V1.09375H92.8509C97.7111 1.09375 100.574 3.52389 100.574 7.3255C100.574 10.0444 99.1066 12.0655 96.46 13.0039L101.296 20.3665ZM92.6584 11.2955C96.0028 11.2955 98.0479 9.92407 98.0479 7.3255C98.0479 4.72693 96.0028 3.35547 92.6584 3.35547H88.1591V11.2955H92.6584Z" fill="black"/>
                        <path d="M70.9549 20.4833C65.1082 20.4833 60.7773 16.2245 60.7773 10.4018C60.7773 4.57908 65.0841 0.320312 70.9308 0.320312C76.7775 0.320312 81.1083 4.57908 81.1083 10.4018C81.1083 16.2245 76.8015 20.4833 70.9549 20.4833ZM70.9549 18.1734C75.3338 18.1734 78.582 14.9252 78.582 10.4018C78.582 5.8543 75.3338 2.63015 70.9308 2.63015C66.5278 2.63015 63.3037 5.8543 63.3037 10.4018C63.3037 14.9252 66.5518 18.1734 70.9549 18.1734Z" fill="black"/>
                        <path d="M42.8398 1.09375H49.673C54.6775 1.09375 57.6129 3.7645 57.6129 7.78266C57.6129 11.8008 54.6775 14.4716 49.673 14.4716H45.3662V20.3665H42.8398V1.09375ZM49.4805 12.1858C52.9692 12.1858 55.0865 10.6459 55.0865 7.78266C55.0865 4.91942 52.9692 3.37953 49.4805 3.37953H45.3662V12.1858H49.4805Z" fill="black"/>
                        <path d="M24.4844 1.09375H38.1747V3.33141H27.0107V9.39473H37.3326V11.6324H27.0107V18.1288H38.3912V20.3665H24.4844V1.09375Z" fill="black"/>
                        <path d="M10.1053 20.4833C4.21056 20.4833 0 16.2245 0 10.4018C0 4.57908 4.21056 0.320312 10.1053 0.320312C15.0136 0.320312 18.6949 3.18355 19.7054 6.86486H16.9625C16.1685 4.43471 13.4497 2.63015 10.1535 2.63015C5.70229 2.63015 2.52633 5.87836 2.52633 10.4018C2.52633 14.9493 5.70229 18.2216 10.2016 18.2216C14.1475 18.2216 17.0828 15.623 17.3715 12.1342H9.69631V9.94464H20.0663V10.8108C20.0663 16.4892 15.7354 20.4833 10.1053 20.4833Z" fill="black"/>
                    </svg>
                </span>
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: '100%',
        height: '100vh',
        backgroundColor: '#66FF99',  // The green background color from your image
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: '200px',  // Adjust as needed
        height: '200px',  // Adjust as needed
        marginBottom: '10%'
    },
    logoText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'black',
    }
};
