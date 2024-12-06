import Container from '@components/Container';

import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer
  className="footer bg-base-200 text-base-content p-10 flex items-center justify-between relative"
  style={{
    backgroundImage: "url('/organizations-bg.jpg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="hero-overlay bg-opacity-60 absolute inset-0"></div> {/* Optional overlay for better text visibility */}
  
  <div className="flex items-center z-10">
    <img src="/minfi.svg" alt="Logo" className="w-12 mr-4" />
    <p className="text-secondary">MINFI</p> {/* Changed text color to white for better contrast */}
  </div>

  <div className="flex flex-col items-center z-10">
    <div className="flex flex-wrap justify-center mb-4">
      <nav className="mr-8">
        <h6 className="footer-title text-secondary">Services</h6> {/* Title color */}
        <div className="flex flex-col">
          <a className="link link-hover text-white">DGB</a> {/* Link color */}
          <a className="link link-hover text-white">DGI</a> {/* Link color */}
        </div>
      </nav>

      <nav className="mr-8">
        <h6 className="footer-title text-secondary">Informations</h6> {/* Title color */}
        <div className="flex flex-col">
          <a className="link link-hover text-white">Nous Concernant</a> {/* Link color */}
          <a className="link link-hover text-white">Contact</a> {/* Link color */}
          <a className="link link-hover text-white">Jobs</a> {/* Link color */}
          <a className="link link-hover text-white">Press kit</a> {/* Link color */}
        </div>
      </nav>

      <nav>
        <h6 className="footer-title text-secondary">Legal</h6> {/* Title color */}
        <div className="flex flex-col">
          <a className="link link-hover text-white">Terms of use</a> {/* Link color */}
          <a className="link link-hover text-white">Privacy policy</a> {/* Link color */}
          <a className="link link-hover text-white">Cookie policy</a> {/* Link color */}
        </div>
      </nav>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="text-black text-right z-10">
    <p className='text-secondary'>&copy; {new Date().getFullYear()} MINFI. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;
