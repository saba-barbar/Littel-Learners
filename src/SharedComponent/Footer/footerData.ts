export interface ContactItem {
    icon: string;
    text: string;
}

export interface FooterColumn {
    title: string;
    links: string[];
}

export interface SocialLink {
    icon: string;
    label: string;
}

export const contactData: ContactItem[] = [
    {
        icon: "/icons/FooterIcon/Icon (10).webp",
        text: "hello@littlelearners.com",
    },
    {
        icon: "/icons/FooterIcon/Icon (11).webp",
        text: "+91 91813 23 2309",
    },
    {
        icon: "/icons/FooterIcon/Icon (12).webp",
        text: "Somewhere in the World",
    },
];

export const footerLinksData: FooterColumn[] = [
    {
        title: "Home",
        links: ["Features", "Our Testimonials", "FAQ"],
    },
    {
        title: "About Us",
        links: [
            "Our Mission",
            "Our Vision",
            "Awards and Recognitions",
            "History",
            "Teachers",
        ],
    },
    {
        title: "Academics",
        links: ["Special Features", "Gallery"],
    },
    {
        title: "Contact Us",
        links: ["Information", "Map & Direction"],
    },
];

export const socialLinksData: SocialLink[] = [
    {
        icon: "/icons/FooterIcon/Icon (13).webp",
        label: "Facebook",
    },
    {
        icon: "/icons/FooterIcon/Icon (14).webp",
        label: "Twitter",
    },
    {
        icon: "/icons/FooterIcon/Icon (15).webp",
        label: "LinkedIn",
    },
];