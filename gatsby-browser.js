import LogRocket from 'logrocket';
import './src/styles/tailwind.css'


export const onClientEntry = () => {
    
    if (process.env.NODE_ENV === 'production') {
        LogRocket.init('cdyunb/thedarkroommcom');
    }
};
