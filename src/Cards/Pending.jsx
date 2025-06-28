import PropTypes from "prop-types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




export const Pending = (props) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return (
        <>
            <button ref={setNodeRef} {...attributes} {...listeners} style={style} className="border-2 p-2 m-2 font-bold bg-white"  >
                {props.id}  {props.arg}
            </button>
        </>


    )
}


Pending.propTypes = {
    arg: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.arrayOf(PropTypes.string).isRequired,
};
