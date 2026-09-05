import type { SubHeroBottonProp } from "./SubHeroBotton";
import message from "../../../public/icons/FooterIcon/Icon (12).svg"
import phone from "../../../public/icons/FooterIcon/Icon (11).svg"
import locatin from "../../../public/icons/FooterIcon/Icon (10).svg"
import hour from "../../../public/icons/FooterIcon/Icon (46).svg"


export     const contactItems: SubHeroBottonProp[] = [
        {
            img: message,
            span: "hello@littlelearners.com"
        },
        {
            img: phone,
            span: "+91 91813 23 2309"
        },
        {
            img: locatin,
            span: "Somewhere in the World"
        },
        {
            img: hour,
            span: "Office Hours - 9am - 6 pm"
        }
    ];