import { Link, Outlet } from 'react-router-dom';
import Navbar_27 from '../components/Navbar_27';

const ShareLayout_27 = () => {
  return (
    <>
    <Navbar_27 />
    <section className='section'>
      <Outlet />
    </section>
    </>
    
  );
};
export default ShareLayout_27;
