import { IoMdInformationCircle } from "react-icons/io";
import { BsCookie } from "react-icons/bs";
import { SiSpringsecurity } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { BiTransferAlt } from "react-icons/bi";
import { IoLinkSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { GrUpdate, GrContact } from "react-icons/gr";


export const policyContents = [ 
            {
            id: 1,
            title: "Information We Collect",
            text: "We may collect the following types of information:",
            icon: <IoMdInformationCircle size={20} color="#ffffff" />,
            lists: [
            {
                title: "a. Personal Information",
                data: [
                "Name, date of birth, gender, and contact details (email, phone, address).",
                "Passport/ID details required for bookings.",
                "Payment information (credit/debit card details, billing address).",
                "Travel preferences (meal choices, special assistance requests)."
                ]
            },
            {
                title: "b. Non-Personal Information",
                data: [
                "Browser type, IP address, device information, operating system.",
                "Website usage data (pages visited, time spent, referral links)."
                ]
            },
            {
                title: "c. Sensitive Information",
                data: [
                "Where required by law or travel providers, we may collect sensitive information such as health details (for medical assistance during travel) or emergency contacts."
                ]
            }
            ],
            lastText: ""
        },
        {
            id: 2,
            title: "How We Use Your Information",
            text: "We use your information to:",
            icon: <IoMdInformationCircle size={20} color="#ffffff" />,
            lists: [
            {
                title: "",
                data: [
                "Process bookings, reservations, and payments.",
                "Provide customer support and respond to inquiries.",
                "Send booking confirmations, travel itineraries, and updates.",
                "Improve our website, services, and customer experience.",
                "Personalize offers, promotions, and recommendations.",
                "Comply with legal obligations and prevent fraud."
                ]
            }
            ],
            lastText: ""
        },
        {
            id: 3,
            title: "How We Share Your Information",
            text: "We may share your information with:",
            icon: <IoMdInformationCircle size={20} color="#ffffff" />,
            lists: [
            {
                title: "",
                data: [
                "Travel suppliers (airlines, hotels, tour operators, car rental agencies) to complete your bookings.",
                "Payment processors to handle secure transactions.",
                "Service providers (IT support, marketing agencies, customer service tools).",
                "Government authorities where required by law or immigration regulations.",
                "Business transfers in case of merger, acquisition, or sale of company assets."
                ]
            }
            ],
            lastText: "We do not sell your personal information to third parties."
        },
        {
            id: 4,
            title: "Cookies and Tracking Technologies",
            text: "We use cookies, web beacons, and similar technologies to:",
            icon: <BsCookie size={20} color="#ffffff" />,
            lists: [
            {
                title: "",
                data: [
                "Enhance website functionality.",
                "Remember user preferences.",
                "Analyze site traffic and usage trends.",
                "Deliver personalized advertisements (where permitted)."
                ]
            }
            ],
            lastText: "You can manage or disable cookies in your browser settings, but some features of our website may not function properly."
        },
        {
            id: 5,
            title: "Data Security",
            text: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
            icon: <SiSpringsecurity size={20} color="#ffffff" />,
            lists: [],
            lastText: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security."
        },
        {
            id: 6,
            title: "Data Retention",
            text: "We retain personal information only as long as necessary to:",
            icon: <FaDatabase size={20} color="#ffffff" />,
            lists: [
            {
                title: "",
                data: [
                "Fulfill the purposes outlined in this Privacy Policy.",
                "Comply with legal, accounting, or reporting requirements."
                ]
            }
            ],
            lastText: "When no longer needed, your information will be securely deleted or anonymized."
        },
        {
            id: 7,
            title: "Your Rights",
            text: "Depending on your location, you may have the following rights:",
            icon: <GoLaw size={20} color="#ffffff"  />,
            lists: [
            {
                title: "",
                data: [
                "Access to the personal information we hold about you.",
                "Correction of inaccurate or incomplete information.",
                "Request deletion of your data (subject to legal obligations).",
                "Object to or restrict processing of your information.",
                "Withdraw consent for marketing communications.",
                "Data portability (where applicable)."
                ]
            }
            ],
            lastText: "To exercise your rights, contact us at [insert contact email]."
        },
        {
            id: 8,
            title: "International Data Transfers",
            text: "As a travel company, we may transfer your information to countries outside your residence, including those that may not provide the same level of data protection.",
            icon: <BiTransferAlt size={20} color="#ffffff" />,
            lists: [],
            lastText: "By using our Services, you consent to such transfers, provided safeguards are in place."
        },
        {
            id: 9,
            title: "Third-Party Links",
            text: "Our website may contain links to third-party websites.",
            icon: <IoLinkSharp size={20} color="#ffffff" />,
            lists: [],
            lastText: "We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies."
        },
        {
            id: 10,
            title: "Children’s Privacy",
            text: "Our Services are not directed to individuals under 18 years of age.",
            icon: <MdPrivacyTip size={20} color="#ffffff" />,
            lists: [],
            lastText: "We do not knowingly collect personal information from children. If we discover we have inadvertently collected information from a child, we will delete it promptly."
        },
        {
            id: 11,
            title: "Updates to This Policy",
            text: "We may update this Privacy Policy from time to time.",
            icon: <GrUpdate size={20} color="#ffffff" />,
            lists: [],
            lastText: "The updated version will be posted on our website with the “Last Updated” date. We encourage you to review this page periodically."
        },
        {
            id: 12,
            title: "Contact Us",
            text: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us:",
            icon: <GrContact size={20} color="#ffffff" />,
            lists: [
            {
                title: "",
                data: [
                "Travel With Us Ltd.",
                "Email: Info@travelwithusltd.co.uk",
                "Phone: +44 07853734440",
                "Address: 46 Orchard Way, Banbury, Oxfordshire, OX16 0HA"
                ]
            }
            ],
            lastText: ""
        }
    ];