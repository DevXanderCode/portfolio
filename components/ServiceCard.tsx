import { IService } from "../types";

const ServiceCard: React.FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  return (
    <div className="flex">
      <Icon />
      <div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default ServiceCard;
