export interface TuitionData {
    program: string;
    ageGroup: string;
    annualTuition: string;
    registrationFee: string;
    activityFee: string;
}

export interface ServiceData {
    service: string;
    price: string;
}

export const tuitionData: TuitionData[] = [
    {
        program: "Nursery",
        ageGroup: "2 - 3 Years",
        annualTuition: "$1,686",
        registrationFee: "$162",
        activityFee: "$12",
    },
    {
        program: "Pre - Kindergarten",
        ageGroup: "3 - 4 Years",
        annualTuition: "$2,666",
        registrationFee: "$220",
        activityFee: "$16",
    },
    {
        program: "Kindergarten",
        ageGroup: "4 - 5 Years",
        annualTuition: "$3,486",
        registrationFee: "$340",
        activityFee: "$20",
    },
];

export const servicesData: ServiceData[] = [
    {
        service: "Before-and-After-School Care",
        price: "$100 / per month",
    },
    {
        service: "Language Immersion Program",
        price: "$60 / per semester",
    },
    {
        service: "Transportation (Optional)",
        price: "$80 / per month",
    },
];