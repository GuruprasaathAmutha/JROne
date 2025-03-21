import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";




export const Pending = ({ arg }) => {
    return (
        <li className=" border-l-4 border-b-2 p-2 mb-4  rounded-md transform transition duration-300  hover:scale-105 text-white mt-2">{arg}</li>
    )
}


Pending.propTypes = {
    arg: PropTypes.arrayOf(PropTypes.string).isRequired,
};
