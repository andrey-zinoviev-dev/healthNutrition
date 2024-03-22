import Action from "./Action"
import Procedure from "./Procedure"
import Services from "./Services"
import About from "./About"
export default function Home() {
    return (
        <main className="main">
            <Action></Action>
            <Procedure></Procedure>
            <Services></Services>
            <About></About>
        </main>
    )
}