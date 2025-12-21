import studentImg from "../assets/happy_college_student_working.png";
import employerImg from "../assets/professional_employer_shaking_hands.png";

export function Features() {
    const features = [
        {
            id: 'students',
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                    </svg>,
            title: "For Students",
            description: "Enter your skills, qualifications, and preferences once. No more repetitive applications. You finally get to choose opportunities that truly resonate with you.",
            image: studentImg.src,
            align: "left",
            stats: "Zero applications. Infinite opportunities."
        },
        {
            id: 'employers',
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                    </svg>,
            title: "For Employers",
            description: "Stop sifting through piles of resumes. Access a dynamic database of pre-vetted student talent, matched intelligently to your needs.",
            image: employerImg.src,
            align: "right",
            stats: "10x Faster Hiring."
        }
    ];
    return (
        <section className="mb-32 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <div className="relative top-0 left-0 w-full overflow-hidden line-height-0 shadow-lg shadow-red">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                    className="relative display-block w-[calc(100%+1.3px)] h-24.25">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-background"></path>
                </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                {/* Central Concept */}
                <div className="flex flex-col text-center items-center justify-center max-w-4xl mx-auto min-h-[90vh]">
                    <h2 className="text-4xl md:text-7xl font-lexend font-bold text-background mb-6 leading-tight">
                        The New Standard for <br/>
                        <span className="text-secondary">Modern Hiring</span>
                    </h2>
                    <p className="text-lg font-lexend font-light text-accent leading-relaxed tracking-wide">
                        We've replaced the friction of traditional applications with intelligent, continuous matching.
                    </p>
                </div>

                {/* Feature Blocks */}
                <div className="space-y-40">
                {features.map((feature, i) => (
                    <div 
                        key={i}
                        id={feature.id}
                        className={`flex flex-col ${feature.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 group select-none">
                            <div className="relative">
                                <div className="md:hover-3d">
                                    <div className="relative border border-white/20 rounded-xl">
                                        <img 
                                        src={feature.image} 
                                        alt={feature.title}
                                        className="w-full object-cover rounded-xl"
                                        />
                                        
                                        {/* Floating Stat Card */}
                                        <div 
                                        className={`absolute bottom-6 ${feature.align === 'right' ? 'right-6' : 'left-6'} z-20 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/20`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                                <span className="font-bold text-primary">{feature.stats}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div /><div /><div /><div /><div /><div /><div /><div />
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="w-14 h-14 rounded-2xl bg-transparent text-secondary flex items-center justify-center">
                            {feature.icon}
                            </div>
                            <h3 className="text-5xl font-lexend font-bold text-background">{feature.title}</h3>
                            <p className="text-lg text-accent leading-relaxed tracking-wide font-light">
                            {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
                </div>

                {/* Algorithm Section */}
                <div 
                id="algorithm-section"
                className="mt-60 relative"
                >
                    <div className="card bg-primary/60 text-white overflow-hidden shadow-2xl mb-20 relative rounded-2xl border border-white/20">
                        {/* Abstract Tech Background */}
                        <div className="absolute top-0 left-0 p-50 bg-secondary/40 blur-[170px] rounded-full" />
                        <div className="absolute bottom-0 left-0 p-40 bg-primary/20 blur-[120px] rounded-full" />
                        
                        <div className="card-body p-12 md:p-32 text-center relative z-10">
                            
                            
                            <h3 className="text-5xl md:text-6xl font-[Lexend] mt-10 md:mt-0 font-bold mb-5 pb-3 text-background">
                                Proprietary Matching Algorithm
                            </h3>
                            
                            <p className="text-md text-white/70 max-w-4xl mx-auto mb-26 font-light leading-relaxed">
                                Our machine learning models don't just match keywords. They understand potential, cultural fit, and trajectory, continuously learning from every successful placement to make the next one even better.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {[
                                { 
                                    icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-secondary" viewBox="0 0 16 16">
                                                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"/>
                                            </svg>, 
                                    title: "Instant Analysis", 
                                    desc: "Real-time processing of millions of data points" },
                                { 
                                    icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-secondary" viewBox="0 0 16 16">
                                                <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                                                <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5"/>
                                            </svg>, 
                                    title: "Adaptive Learning", 
                                    desc: "The more you use it, the smarter it gets" },
                                { 
                                    icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-secondary" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                                            </svg>, 
                                    title: "Bias Elimination", 
                                    desc: "Focus purely on capability and potential" }
                                ].map((item, i) => (
                                <div className="md:hover-3d" key={i}>
                                    <div
                                        className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-left hover:bg-white/10"
                                    >
                                        <div className="mb-4">{item.icon}</div>
                                        <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                                        <p className="text-white/50">{item.desc}</p>
                                    </div>
                                    <div/><div/><div/><div/><div/><div/><div/><div/>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background relative top-0 left-0 w-full overflow-hidden line-height-0 shadow-lg shadow-red">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                    className="relative display-block w-[calc(100%+1.3px)] h-24.25">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-primary"></path>
                </svg>
            </div>
        </section>
    );
}