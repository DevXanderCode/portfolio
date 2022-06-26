import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <div className="px-6 py-2">
      {/* Education and Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-2 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Mechanical Engineering</h5>
            <p className="font-semibold">
              University of Port-Harcourt (2017 - present)
            </p>
            <p className="my-1">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to In publishing and graphic design, Lorem
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-2 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-1 text-xl font-bold">Lead Front End Developer</h5>
            <p className="font-semibold">Digit Home Limited (2022 - present)</p>
            <p className="my-3">
              I worked as the lead frontend developer for both mobile and web of
              this property tech start up based in Lagos Nigeria
            </p>
          </div>
        </div>
      </div>

      {/* Languages and Tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
