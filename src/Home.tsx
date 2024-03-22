import React from "react"
import Action from "./Action"
import Procedure from "./Procedure"
import Services from "./Services"
import About from "./About"
import Subscribe from "./Subscribe"
import LeadForm from "./LeadForm"
export default function Home() {
    const [formOpened, setFormOpened] = React.useState(false);

    return (
        <main className="main">
            <Action setFormOpened={setFormOpened}></Action>
            <Procedure></Procedure>
            <Services></Services>
            <About></About>
            <Subscribe></Subscribe>
            {formOpened && <LeadForm setFormOpened={setFormOpened}></LeadForm>}
        </main>
    )
}