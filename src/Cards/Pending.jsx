import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




export const Pending = ({ id, arg }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="border-2 p-2 m-2 font-bold bg-white"  >
            {id}  {arg}
        </div>
    )
}


Pending.propTypes = {
    arg: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.arrayOf(PropTypes.string).isRequired,
};
