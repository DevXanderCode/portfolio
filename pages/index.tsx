import type { NextPage } from "next";
import { ServiceCard } from "../components";
import { services } from "../data";

const index: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </h5>
      <div className="flex-grow p-4 mt-5 -mx-6 bg-gray-400 dark:bg-dark-100">
        <h6 className="my-3 text-xl font-bold tracking-wide">What i offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services?.map((service, idx) => (
            <div
              key={service?.id}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
