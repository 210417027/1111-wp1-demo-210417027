import { Outlet } from 'react-router-dom';
import Navbar_27 from '../components/Navbar_27';

const SharedLayout_27 = () => {
  return (
    <>
      <Navbar_27 />
      <section className='section'>
        <Outlet />
      </section>
    </>
  );
};
export default SharedLayout_27;
