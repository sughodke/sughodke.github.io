import Header from "../partials/Header";
import SocialLinks from "../partials/SocialLinks";
import ContactForm from "../partials/ContactForm";
import Project from "../components/Project";

export default function Home() {
    return (
        <div>
            <Header />
            <SocialLinks/>

            <main>
                <Project>
                    <p><a>RentMetrics</a> is a companion tool to help Turo, Uber and Lyft drivers understand cost and
                        earnings per-mile. The models are trained on custom datasets and are accurate to major Metros. I
                        am currently working on adding mapping and a Material Design UI.</p>
                </Project>

                <Project>
                    <p>Two years ago I started <a href="http://172.93.55.89">AlohaMD</a>, a telehealth consulting
                        service in the SF Bay Area. We&apos;ve stopped taking on new contracts. See our case-studies for the
                        work we undertook.</p>
                </Project>

                <Project>
                    <p><a>Beardly</a> is an augmented reality app that I have been developing for iOS. My goal was to
                        create a teaching tool on shaving with the direction of beard hairs — preventing ingrown hairs.
                        Software is written to identify and highlight beard hair, modeling is needed to get the
                        direction of hairs at a given point.</p>
                </Project>

                <Project>
                    <p>Kahasi is a <a href="https://en.wikipedia.org/wiki/SuperH#J_Core">SuperH/JCore</a> SoC emulator
                        that I am writing with arm.js and PyPy.js. The simulation is designed to run the full Linux and
                        XWindows sandbox environment right in the browser.</p>
                </Project>

                <Project>
                    <p>I&apos;m building <a href="#">Sanjay the IT Guy</a>, a time management game (to the likes of
                        DinerDash) that puts you in the shoes of Sanjay an under-paid IT Guy who has to put out literal
                        and figurative fires in his office.</p>
                </Project>

                <Project>
                    <p>My newest project is <a href="//roscida.biz">Roscida</a>, a tool to move communications among
                        teams into the 21st century. This tool will migrate conversations from Mailers and USENET groups
                        into <a href="http://discourse.org">Discourse</a> community. Users will be able to search
                        previous conversations, create new threads all while using a great web-first User Interface.</p>
                </Project>

            </main>

            <ContactForm />
        </div>
    )
}
