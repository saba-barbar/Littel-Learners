import "./ContactForm.css";
import ArrowDown from "../../../public/icons/arrowDown.svg"
import { StudentFormFields, StudentProgramOptions, StudentSocialLinks } from "./ContactFormData";
import InputCard from "../Inputs/InputsCard";
import Title from "../../SharedComponent/Title/Title";

const ContactForm = () => {
    return (
        <section className="contact-section wrapper m-section">
            <Title span="Contact Form" title="Student Information" desc="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs." />

            <div className="contact-container p-relative">
                <div className="social-tabs">
                    {StudentSocialLinks.map((social) => (
                        <a key={social.id} href={social.path} target="_blank" rel="noopener noreferrer" className="social-tab-item" aria-label={social.platform} >
                            <img src={social.icon} alt={social.platform} />
                        </a>
                    ))}
                </div>

                <form className="contact-form-grid" onSubmit={(event) => event.preventDefault()}>
                    {StudentFormFields.map((field) => (
                        <InputCard key={field.name}  {...field} />
                    ))}

                    <div className="input-group">
                        <label htmlFor="program">  Program of Interest </label>

                        <div className="select-wrapper">
                            <select id="program" name="program" className="custom-select" >
                                <option value="">  Select Program </option>

                                {StudentProgramOptions.map((option) => (
                                    <option key={option.value} value={option.value} >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <img src={ArrowDown} alt="" className="select-arrow" />
                        </div>
                    </div>

                    <InputCard label="Message" name="message" type="textarea" placeholder="Enter your Message" isFullWidth={true} />

                    <button type="submit" className="submit-btn"> Submit </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;