import { FaArrowDown } from "react-icons/fa6";
import { useQualities } from "../hooks/useQualities";


const Home = () => {
    const quality = useQualities();

    return (
        <section>
            <div id="about" className="flex flex-col min-h-[calc(100vh-126px)]">
                <>
                    <img className="h-64 w-64 mx-auto my-4" src="/bitmoji-shaun.PNG" alt="This is Bitmoji Shaun, Hello!" />
                    <h2 className="text-3xl text-center my-4 text-text">
                        Hi! I'm Shaun Czubkowski
                    </h2>
                    <div className="text-center font-mono text-xl text-secondary">
                        <p>{quality}</p>

                    </div>
                    <FaArrowDown className="self-center bottom-10 h-10 w-10  animate-bounce text-secondary" />
                </>
            </div>
            <div className="flex flex-row text-text">
                <img className="w-[500px] h-[500px]" src="/shaun.png" alt="Shaun Czubkowski" />
                <article className="self-center mx-7 text-lg">
                    <p className="my-4">
                        Hi, I'm Shaun Czubkowski, a full-stack software engineer based in Salt Lake City, UT.
                        I have a passion for creating smooth, intuitive user experiences, and while I naturally
                        gravitate toward front-end development, I'm always up for tackling challenges across the
                        entire software stack—from DevOps to backend development.
                    </p>
                    <p className="my-4">
                        What really drives me is the opportunity to solve problems for users. I believe that understanding
                        the people behind the problems is key to building solutions that not only meet their needs but also
                        make their lives easier. Whether I'm collaborating with product owners, designers, or users, I focus
                        on empathy and communication to create products that make a real impact.
                    </p>
                    <p className="my-4">
                        Over the years, I've had the privilege of working on a diverse range of projects—from building a mobile
                        app to help users locate items, to building a data quality interface, and even streamlining internationalization
                        processes. I've worked in industries like sustainability and real estate, helping organizations measure and manage
                        their environmental impacts, as well as building internal tools to support retail operations at a growing midwestern
                        company.
                    </p>
                    <p className="my-4">
                        No matter the project, my goal is to bring a mix of technical expertise, creativity, and empathy to the table. I’m
                        always excited to dive into new challenges and collaborate with others to create something meaningful.
                    </p>
                </article>

            </div>
        </section >

    );
}

export default Home;