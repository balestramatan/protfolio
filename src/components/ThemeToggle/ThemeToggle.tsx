import { useGlobalContext } from '../../contexts/appContext';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import './ThemeToggle.css';

const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
    return (
        <section className='toggle-container'>
            <button className='dark-toggle' onClick={toggleDarkTheme}>
                {isDarkTheme ? 
                    <BsFillSunFill className='toggle-icon'/> :
                    <BsFillMoonFill className='toggle-icon' />
                }
            </button>
        </section>
    );
}

export default ThemeToggle;