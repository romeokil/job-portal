import { Link } from 'react-router-dom';

const Logo = ({ user }) => {
  let path = "/landing"; // default for no user

  if (user) {
    if (user.role === "Applicant") path = "/";
    else if (user.role === "Recruiter") path = "/admin/companies";
  }

  return (
    <Link to={path} className="font-semibold text-xl sm:text-2xl">
      <h1>Job Portal</h1>
    </Link>
  );
};

export default Logo