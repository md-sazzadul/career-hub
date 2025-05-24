import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={logo} alt="Jobs" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="my-4 flex">
          <h2 className="flex mr-2">
            <MdLocationOn className="text-2xl mr-2" />
            {location}
          </h2>
          <h2 className="flex">
            <AiOutlineDollar className="text-2xl mr-2" />
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
