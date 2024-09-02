import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
export const PopInEffects=()=>{
useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
}