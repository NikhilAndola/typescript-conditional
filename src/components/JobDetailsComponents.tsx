// Define the allowed job types
type JobType = 'engineer' | 'doctor';

// Define person details for each job
type EngineerDetails = {
  engineerType: string;
  engineerDegree: string;
};

type DoctorDetails = {
  doctorType: string;
  doctorDegree: string;
};

// Define the props for the component
type EngineerProps = {
  job: 'engineer';
  personDetails: {
    engineerType: string;
    engineerDegree: string;
  };
};

type DoctorProps = {
  job: 'doctor';
  personDetails: DoctorDetails;
  name: string;
  age: number;
};

type Props = EngineerProps | DoctorProps;

// Define the component
const JobDetailsComponent: React.FC<Props> = (props: Props) => {
  if (props.job === 'engineer') {
    const { personDetails } = props;
    return (
      <div>
        <h1>Job: Engineer</h1>
        <p>Engineer Type: {personDetails.engineerType}</p>
        <p>Engineer Degree: {personDetails.engineerDegree}</p>
      </div>
    );
  }

  if (props.job === 'doctor') {
    const { personDetails, name, age } = props;
    return (
      <div>
        <h1>Job: Doctor</h1>
        <p>Doctor Type: {personDetails.doctorType}</p>
        <p>Doctor Degree: {personDetails.doctorDegree}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }

  return null;
};

export default JobDetailsComponent;
