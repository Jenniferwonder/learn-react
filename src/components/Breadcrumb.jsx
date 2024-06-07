import { Link } from 'react-router-dom'

export default function Breadcrumb({ title }) {
  return (
    <ul className="md:mx-20 mt-16 md:mt-[4.5rem] flex space-x-2 rtl:space-x-reverse">
      <li>
        <Link to="/learn-react/Dashboard/" className="text-primary hover:underline">
          Dashboard
        </Link>
      </li>
      <li className="before:content-['/'] before:mr-2">
        <span>{title}</span>
      </li>
    </ul>
  )
}
