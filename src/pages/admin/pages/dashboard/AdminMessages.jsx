import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown } from "@custom";
import { Card, Button, Table, Modal } from "@ui"; 
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';


export default function AdminMessages(){
    const [messageText, setMessageText] = useState("Per Day");
    const [modal, setModal] = useState(false);
    const [content, setContent] = useState({});



    const [messages, setMessages] = useState([
        {name: "Abdul Ahad", email: "ahad@gmail.com", message: "This is message from Abdul Ahad", fullMessage: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",SendMessage: ""},
        {name: "John Doe", email: "john@gmail.com", message: "This is message from John Doe", fullMessage: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", SendMessage: ""},
        {name: "Jane Doe", email: "Jane@gmail.com", message: "This is message from Jane Doe", fullMessage: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with", SendMessage: ""},
        {name: "Jane Emmit", email: "Jane@gmail.com", message: "This is message from Jane Emmit", fullMessage: "desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", SendMessage: ""},
    ]);

    const showModal = (e, content) =>{
        e.stopPropagation();
        setModal(true);
        setContent(content);
    }

    const openMail = (e, content) =>{
        e.stopPropagation();
        window.location.href = "mailto:" + content.email;
    }

    return(
        <section className="mt-10 flex flex-col gap-10">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-5">
                <Card styles="flex flex-col gap-10">
                    <div className="grid grid-cols-2">
                        <h2 className="text-lg text-[var(--primary)] font-semibold">Messages {messageText}</h2>
                        <Dropdown 
                            trigger={<div className="flex flex-row gap-2 items-center justify-self-end cursor-pointer">
                                <p className="text-[var(--primary)] text-md">{messageText}</p>
                                <IoMdArrowDropdown size={30} color="var(--secondary)" />
                            </div>}
                            content={<div className="flex flex-col gap-2 cursor-pointer">
                                {["Per Day", "Per Week", "Per Month", "Per Year"].map((per) => <p onClick={() => setMessageText(per)}>{per}</p>)}
                            </div>}
                            styles="right-0 px-6 py-3 rounded-md w-fit"
                            closeOnClick={true}
                        />
                    </div>
                    <LineChart
                        series={[
                        { data: [2, 5, 3, 7, 4] },
                        ]}
                        height={300}
                    />
                </Card>
                <Card>
                    <h2 className="text-lg font-semibold text-[var(--primary)]">Popular Destinations</h2>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'England' },
                                { id: 1, value: 20, label: 'Monaco' },
                                { id: 2, value: 30, label: 'Dubai' },
                            ],
                            },
                        ]}
                        height={300}
                    />
                </Card>
            </section>
            <Card className="flex flex-col gap-5">
                <h2 className="text-xl text-[var(--primary)] font-semibold">All Messages</h2>
                <Table 
                    contents={messages}
                    headers={["Name", "Email", "Message", "Full Message", "Send Message"]}
                    barStyle="grid grid-cols-5 min-w-[639px]"
                    customKey={["fullMessage", "SendMessage"]}
                    customStyle="hover:text-[#46BEF7] cursor-pointer"
                    showCustom={[
                        {stop: "fullMessage", text: "See Full Message", fn: showModal},
                        {stop: "SendMessage", text: "Send Message", fn: openMail}
                    ]}
                />
            </Card>
            <Modal
                state={modal}
                closeOnParent={true}
                setState={setModal}
                cardStyle="w-[90%] md:w-[50%]"
                cardClick={(e) => e.stopPropagation()}
            >
                <p className="text-lg text-[var(--primary)]">{content.fullMessage}</p>
            </Modal>
        </section>
    )
}