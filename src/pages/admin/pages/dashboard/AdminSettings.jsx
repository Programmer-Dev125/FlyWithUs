import { Card, Input, Button } from "@ui"; 
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function AdminSettings(){
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return (
      <section className="mt-10">
            <Card styles="flex flex-col gap-10">
                <h2 className="text-2xl text-[var(--primary)] font-semibold">Update Your Admin Settings</h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <Input 
                        label="Change Your Email"
                        labelStyles="text-lg text-[var(--primary)] font-semibold"
                        mainParent="flex flex-col gap-3"
                        type="email"
                        rightIcon={<MdEmail size={30} color="var(--primary)" />}
                        parentStyles="border rounded-lg border-[#E5E7EB] py-2 px-3"
                        value="qasim@gmail.com"
                        inputStyles="text-md text-[var(--primary)] w-[100%]"
                    />
                    <Input 
                        label="Change Your Password"
                        labelStyles="text-lg text-[var(--primary)] font-semibold"
                        type="text"
                        mainParent="flex flex-col gap-3"
                        rightIcon={<RiLockPasswordFill size={30} color="var(--primary)" />}
                        parentStyles="border rounded-lg border-[#E5E7EB] py-2 px-3"
                        value="qasim@gmail.com"
                        inputStyles="text-md text-[var(--primary)] w-[100%]"  
                    />
                    <Button otherPad={true}>
                        Update Account
                    </Button>
                </form>
            </Card>
        </section>
    )
}