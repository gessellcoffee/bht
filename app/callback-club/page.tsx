import Card from "@/component/ui/Card";

export default async function CallbackClubPage() {

    return (
        <>
            <Card title={"Callback Club"}
                  body={"Callback Club is a bimonthly artists exercise where participants can " +
                      "run their audition monologues, solos/songs, scenes with partners, or practice cold reads for " +
                      "peer feedback from other performers."}
            />
            <Card title={"Monthly Workshops"}
                  body={"Alongside the peer feedback sessions of Callback Club are the free monthly workshops. " +
                      "These workshops are run by working artists (often if not always from the Twin Cities) that are" +
                      " passionate about a practice or technique that has helped them grow or develop their own skills." +
                      " We've had clowns, shakespeare enthusiasts, movement specialists, and more come to Callback Club" +
                      " to share their craft."}
            />

            <Card title={"Exploration Series"}
                  body={"In the spirit of Belong Here Theater's commitment to growth, the series leader " +
                      "will begin running Exploration sessions where they will bring a learning from a " +
                      "video/speaker/book that teaches a technique or skill for performers to use and will " +
                      "practice the skill with the session participants. The first version of this series" +
                      " will be a Meisner exploration, following the levels of the Repetition exercise."} />
        </>
    )
}