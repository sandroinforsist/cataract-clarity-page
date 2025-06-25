
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Início' },
    { path: '/catarata', label: 'Catarata' },
    { path: '/links', label: 'Links Importantes' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="container mx-auto">
        <nav className="flex justify-center md:justify-end space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-teal-600'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="text-center mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            © 2024 Dr. Carlos Coelho - CRM MA 10871. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
