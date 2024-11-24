export default function Skills() {
    return (
        <section className="p-3 pb-5">
            <h3 className="text-3xl my-4 text-accent text-center">Skills</h3>
            <div className="grid grid-cols-1 text-left gap-4">
                <div className="grid grid-cols-1">
                    <h4 className="text-xl font-bold">Front End</h4>
                    <ul className="grid grid-cols-3 ml-3">
                        <li>Semantic HTML</li>
                        <li>CSS</li>
                        <li>TailwindCSS</li>
                        <li>SASS</li>
                        <li>Javascript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>Mixpanel</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1">
                    <h4 className="text-xl font-bold">Back End</h4>
                    <ul className="grid grid-cols-3 ml-3">
                        <li>NodeJS</li>
                        <li>REST APIs</li>
                        <li>GraphQL</li>
                        <li>Java</li>
                        <li>Databases</li>
                        <li>DataDog</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1">
                    <h4 className="text-xl font-bold">Additional</h4>
                    <ul className="grid grid-cols-1 ml-3">
                        <li>User Experience(UX) Design & Development</li>
                        <li>Responsive Web Design</li>
                        <li>Figma</li>
                        <li>Prototyping</li>
                        <li>Code Quality & Best Practices</li>
                        <li>Problem Solving & Troubleshooting</li>
                        <li>Collaboration & Teamwork</li>
                        <li>Agile Development Methodologies</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};