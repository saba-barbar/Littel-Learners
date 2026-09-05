import fbIcon from "../../../public/icons/FooterIcon/Icon (13).svg";
import twitterIcon from "../../../public/icons/FooterIcon/Icon (14).svg";
import linkedinIcon from "../../../public/icons/FooterIcon/Icon (15).svg";

export interface StudentFormField {
    label: string;
    name: string;
    type?: "text" | "email" | "tel" | "number" | "textarea";
    placeholder?: string;
    isFullWidth?: boolean;
}

export interface StudentProgramOption {
    label: string;
    value: string;
}

export interface StudentSocialLink {
    id: number;
    platform: string;
    icon: string;
    path: string;
}
export const StudentFormFields: StudentFormField[] = [
    {
        label: "Parent Name",
        name: "parentName",
        type: "text",
        placeholder: "Enter Parent Name",
    },
    {
        label: "Email Address",
        name: "email",
        type: "email",
        placeholder: "Enter Email Address",
    },
    {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        placeholder: "Enter Phone Number",
    },
    {
        label: "Student Name",
        name: "studentName",
        type: "text",
        placeholder: "Enter Student Name",
    },
    {
        label: "Student Age",
        name: "studentAge",
        type: "number",
        placeholder: "Enter Student Age",
    },
];

export const StudentProgramOptions: StudentProgramOption[] = [
    {
        label: "OPTION1",
        value: "OPTION1",
    },
    {
        label: "OPTION2",
        value: "OPTION2",
    },
    {
        label: "OPTION3",
        value: "OPTION3",
    },
];

export const StudentSocialLinks: StudentSocialLink[] = [
    {
        id: 1,
        platform: "facebook",
        icon: fbIcon,
        path: "https://facebook.com",
    },
    {
        id: 2,
        platform: "twitter",
        icon: twitterIcon,
        path: "https://twitter.com",
    },
    {
        id: 3,
        platform: "linkedin",
        icon: linkedinIcon,
        path: "https://linkedin.com",
    },
];