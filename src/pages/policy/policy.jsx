import { Title, Pointer } from "@custom";
import {policyContents} from "./policyContents";
export default function Policy(){
    
    return(
        <section className="w-[90%] mx-auto flex flex-col gap-10 animated-content">
            <div className="flex flex-col gap-5">
                <Title sub="Privacy" main="Policy" />
                <p className="text-lg leading-loose text-[var(--primary)] indent-10">"We respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website <span className="text-lg bg-[var(--focus)] text-white px-2 py-1 rounded-lg">travelwithusltd.co.uk</span>, mobile applications, and travel-related services (collectively, the “Services”). By using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our Services."</p> 
            </div>
            <section className="flex flex-col gap-10">
                <Title sub="Our" main="Policy" />
                <div className="flex flex-col gap-10">
                    {policyContents.map((content) => <Pointer
                        key={content.id}
                        title={content.title}
                        text={content.text}
                        lists={content.lists}
                        lastText={content.lastText}
                        headerStyle="border-l-5 border-l-[var(--focus)] pl-5"
                        icon={content.icon}
                    /> )}
                </div>
            </section>
        </section>
    )
}