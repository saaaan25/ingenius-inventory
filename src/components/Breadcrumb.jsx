import { Link } from "react-router-dom";
import {HiChevronRight } from "react-icons/hi";

export const Breadcrumb = ({values}) => {
  return (
    <div className="flex items-center text-routes">
      <Link className="font-light text-routes_selected text-sm" to={values[0].url}>
        {values[0].label}
      </Link>
      <HiChevronRight />
      <Link
        className="font-light text-routes_selected text-sm"
        to={values[1].url}
      >
        {values[1].label}
      </Link>
    </div>
  );
};
