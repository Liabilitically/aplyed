'use client';

import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore/lite";

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [student_not_employer, setStudentNotEmployer] = useState(true);

    return (
        <div className="flex flex-col bg-background py-1 text-center items-center justify-center" id="waitlist-form">
            <h2 className="text-7xl md:text-8xl font-bold mb-8 text-primary/90" id="waitlist-form-heading">Are you ready?</h2>
            {!submitted && (
                <p className="text-lg text-muted-foreground mb-20 font-light">
                    Be the first to experience hiring that feels human.
                </p>
            )}
            {!submitted && (
                <form className="flex flex-col justify-center w-fit items-center" onSubmit={(e) => {e.preventDefault()}}>
                    <input 
                    required
                    id="email-input"
                    type="email" 
                    placeholder="Enter your email address" 
                    className="input validator bg-background border-muted-foreground max-w-75 mb-8 rounded-full px-6"
                    content="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
                    <div className="tabs tabs-box bg-muted rounded-full w-fit gap-2 flex flex-row mb-20" id="role-picker">
                        <input type="radio" checked={student_not_employer} onChange={() => setStudentNotEmployer(true)} name="role" className="tab text-primary checked:text-background rounded-full duration-100 checked:bg-primary/95 checked:shadow-md px-4" aria-label="Student" />
                        <input type="radio" checked={!student_not_employer} onChange={() => setStudentNotEmployer(false)} name="role" className="tab text-primary checked:text-background rounded-full duration-100 checked:bg-primary/95 checked:shadow-md px-4" aria-label="Employer" />
                    </div>
                    <button 
                    type="submit"
                    id="join-waitlist-btn"
                    className={`btn rounded-full mb-20 bg-primary text-primary-foreground px-36 h-13 text-lg font-medium shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-primary/30 md:hover:px-80 tracking-wide`}
                    onClick={async () => {
                        if (email.length != 0) {
                            const role = student_not_employer ? "student" : "employer";
                            try {
                                await addDoc(collection(db, "waitlistFormData"), {
                                    email: email,
                                    role: role,
                                    timestamp: new Date().toString(),
                                });
                            } catch (error) {
                                console.error("Error adding document: ", error);
                                throw error
                            }
                            document.getElementById('waitlist-form-heading')!.innerText = "You're in! 🎉";
                            setSubmitted(true);
                        }
                    }}
                    >
                        Join
                    </button>
                </form>
            )}
        </div>
    );
}