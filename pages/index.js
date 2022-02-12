import Header from "../partials/Header";
import SocialLinks from "../partials/SocialLinks";
import ContactForm from "../partials/ContactForm";
import Projects from "../partials/Projects";
import Project from "../components/Project";

export default function Home() {
    return <div>
        <Header />
        <SocialLinks/>

        <main>
            { Projects.map((p, idx) => <Project key={idx}>{p}</Project>) }
        </main>

        <ContactForm />
    </div>
}
