import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-serif font-bold text-white">Nocta Studio</span>
    </Link>
  );
}