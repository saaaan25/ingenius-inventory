import PropTypes from "prop-types";
import { FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

const TextInputFormItem = ({ label, field, isTextArea }) => {
    return (
        <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl asChild>
                {isTextArea ? (
                <textarea {...field} className="border border-secondary_line p-2 rounded w-full" />
                ) : (
                <input {...field} className="border border-secondary_line p-2 rounded w-full" />
                )}
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};

TextInputFormItem.propTypes = {
    label: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    isTextArea: PropTypes.bool,
};

export default TextInputFormItem;
