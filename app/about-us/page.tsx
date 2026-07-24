import Navbar from "@/component/Navbar";
import Card from "@/component/ui/Card";

export default async function AboutUsPage() {

    return (
        <>
            <div className={' h-screen w-screen'}>
                <Card title={
                    "About Us"
                } body={"Belong Here Theater is a Minneapolis theater company with the goal of bringing " +
                    "artists together to share their work, techniques and passions. We do this through our main " +
                    "service, Callback Club. Soon Belong Here Theater will be offering scene studies, cabarets " +
                    "coaching, and whatever else we can manage to give back to the community. We encourage " +
                    "our community to keep giving back to each other through our services and hope it builds " +
                    "a place for everyone to grow together."} />
            </div>
        </>
    )
}