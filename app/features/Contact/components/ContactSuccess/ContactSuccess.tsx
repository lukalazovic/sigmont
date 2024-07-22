import { SvgCheckmarkWithCircle } from "../../icons/SvgCheckmarkWithCircle";

export const ContactSuccess = () => {
    return (
        <div className="contact-form-success d-flex flex-column align-items-center justify-content-center h-100">
            <SvgCheckmarkWithCircle />
            <h2 className="mt-3">Message sent!</h2>
        </div>
    );
};
