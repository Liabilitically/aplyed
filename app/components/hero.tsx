'use client';
import heroBg from '../assets/professional_minimal_geometric_connectivity_background.png';

import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default function Hero() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background" id="hero-section">
            {/* Dynamic Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background/80 to-background z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background z-10" />
                <img 
                    src={heroBg.src} 
                    alt="Hero Background" 
                    className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
                />
            </div>

            <div className="container relative px-10 py-10 text-center justify-center">
                
                <h1 className="text-4xl md:text-6xl font-lexend font-bold text-primary mb-25 pt-10 md:pt-10 leading-[1.1] tracking-normal">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] animate-gradient">
                    This is a hiring platform for startups to find motivated students for early-stage roles.
                    </span>
                </h1>
                
                <p className="text-lg md:text-lg text-primary mb-15 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                    I am currently building the MVP in public. Wanna follow the build?
                </p>

                {!submitted ? (
                    <form className="flex flex-col sm:flex-row tracking-wide items-center justify-center gap-4 mb-40" onSubmit={(e) => {e.preventDefault()}}>
                        <input 
                        required
                        type="email"
                        id='email-input'
                        placeholder="Enter your email address..." 
                        className="input input-lg validator w-xs text-sm px-6 h-14 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        content="email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                        {/* <div className="tabs tabs-box bg-muted rounded-full w-[200] gap-2 flex flex-row mb-20" id="role-picker">
                            <input type="radio" checked={student_not_employer} onChange={() => setStudentNotEmployer(true)} name="role" className="tab text-primary checked:text-background rounded-full duration-100 checked:bg-primary/95 checked:shadow-md px-4" aria-label="Student" />
                            <input type="radio" checked={!student_not_employer} onChange={() => setStudentNotEmployer(false)} name="role" className="tab text-primary checked:text-background rounded-full duration-100 checked:bg-primary/95 checked:shadow-md px-4" aria-label="Employer" />
                        </div> */}
                        <button 
                        type='submit'
                        className="btn h-14 text-md px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 hover:-translate-y-0.5"
                        onClick={async () => {
                            if (email.length != 0) {
                                try {
                                    await addDoc(collection(db, "waitlistFormData"), {
                                        email: email,
                                        timestamp: new Date().toString(),
                                    });
                                } catch (error) {
                                    console.error("Error adding document: ", error);
                                    throw error
                                }
                                setSubmitted(true);
                            }
                        }}
                        >
                            ...to join the waitlist
                        </button>
                    </form>
                ) : (
                    <p className="text-lg md:text-lg text-primary mb-40 max-w-2xl mx-auto leading-relaxed font-light">
                        🎉 You're in! Thanks for joining. I'll keep you updated.
                    </p>
                )}

                <p className="text-md md:text-md text-muted-foreground mb-15 md:mb-20 max-w-2xl mx-auto leading-relaxed font-light">
                    Also, consider <a href="https://x.com/_Tarakesh_" target="_blank" rel="noopener noreferrer" className="text-primary underline">following me on X</a> .
                </p>
            </div>
        </section>
    );
}