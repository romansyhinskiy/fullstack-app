import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import { Loading } from "./loading.js";
import { Job } from "./Job.js";
import Wrapper from "../assets/wrappers/JobsContainer";

export const JobsContainer = () => {
  const { getAllJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
    getAllJobs();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>{" "}
    </Wrapper>
  );
};
