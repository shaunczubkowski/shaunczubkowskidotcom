import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const verbs = ['write high-quality code', 'understand user problems', 'improve user experiences', 'develop solutions with modern technology']

export default function About() {
    function rotateVerb(): string {
        return `I ${verbs[3]}`;
    }

    return (
        <section>
            <div id="about" className="flex flex-col min-h-[calc(100vh-126px)]">
                <h1 className="text-4xl font-semibold text-center leading-snug my-4">Elevating User Experiences through Thoughtful Web Development.</h1>
                <div className="grow">
                    <img className="h-64 w-64 mx-auto my-4" src="/bitmoji-shaun.PNG" alt="This is Bitmoji Shaun, Hello!" />
                    <h2 className="text-3xl text-center my-4">
                        Hi! I'm Shaun Czubkowski
                    </h2>
                    <div className="text-center font-mono text-xl text-accent">
                        {rotateVerb()}
                    </div>
                    <FaArrowDown className="h-10 w-10 mx-auto mt-10 animate-bounce text-accent" />
                </div>
            </div>
            <div className="bg-lightBackground p-5 h-96 flex flex-col justify-center">
                <p className="text-primary text-left text-lg leading-10">
                    Software Engineer currently based in Salt Lake City, UT. As I continue to gain experience as a web developer and software engineer, I've learned that it's not just about the code or what framework you're going to build the solution on. My passion is designing elegant user experiences and bringing them to life through collaboration and code.
                </p>
            </div>
        </section>

    );
}