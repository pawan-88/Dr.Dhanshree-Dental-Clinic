import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Dr. DHANSHREE'S Dental Clinic</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
