import PropTypes from "prop-types";
import { HiChevronRight } from "react-icons/hi";

const PageRoute = ({ page1, page2 }) => {
    return (
        <div className="w-full flex justify-start items-center">
            <a className="font-light text-routes text-sm" href={page1.route}>{page1.name}</a>
            {page2 &&
                (
                    <div className="flex w-full items-center text-routes">
                        <HiChevronRight />
                        <a className="font-light text-routes_selected text-sm" href={page2.route}>{page2.name}</a>
                    </div>
                ) 
            }
        </div>
    );
}

PageRoute.propTypes = {
    page1: PropTypes.object.isRequired,
    page2: PropTypes.object
}
 
export default PageRoute;