import { Link, useLocation } from 'react-router-dom';

export interface IStudy {
    name: string;
    path: string;
}
interface IProps {
    studyItems: IStudy[];
}

const IsActive = (path: string) => {
  const location = useLocation();
  return location.pathname.includes(path);
};

function Study({ studyItems }: IProps) {
  return (
    <div className="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5">
      {studyItems.map((study) => (
        <Link
          className={IsActive(study.path.toString()) ? 'text-blue-500' : ''}
          key={study.path}
          to={study.path}
        >
          {study.name}
        </Link>
      ))}
    </div>
  );
}

export default Study;
