import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import { clsName } from "@/lib/utills.js";
import { useToast } from "../assets/hooks/ToastProvider";
import { useState } from "react";

export const ContactSection = () => {

    const toast = useToast();
    const [isSubmit, trackIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        trackIsSubmit(true);
        setTimeout(() => {
            toast("Message Sent", "Your Message has been delivered successfully.");
            trackIsSubmit(false);

        }, 1500);
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold
             mb-4 text-center">Get In
                    <span className="text-primary">Touch</span></h2>

                <p className="text-center text-muted-foreground
                 mb-12 max-w-2xl mx-auto">
                    Feel free to react out. I'm always open to discussing new
                    opportunities
                </p>

                <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start text-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:asmitazope0990@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        asmitazope0990@gmail.com
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start text-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:12345678910"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        12345678910
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start text-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Pune
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8"></div>
                        <h4 className="font-medium mb-4">Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="#">
                                <Linkedin />
                            </a>

                            <a href="#">
                                <Twitter />
                            </a>

                            <a href="#">
                                <Instagram />
                            </a>

                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                                Your Name</label>
                            <input type="text" id="name" name="name" required
                                className="w-full px-4 py-3 rounded-md border border-input 
                            bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"

                                placeholder="Asmita Zope..."

                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                                Your Email</label>
                            <input type="email" id="email" name="email" required
                                className="w-full px-4 py-3 rounded-md border border-input 
                            bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"

                                placeholder="Alexa@gmail.com"

                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                                Your Message</label>
                            <textarea id="message" name="message" required
                                className="w-full px-4 py-3 rounded-md border border-input 
                            bg-background focus:outline-hidden focus:ring-2 focus:ring-primary
                            resize-none"

                                placeholder="Write your message here..."

                            />
                        </div>

                        <button type="submit" disabled={isSubmit}
                            className={clsName("cosmic-button w-fulll flex items-center justify-center gap-2",

                            )}>{isSubmit ? "Sending..." : "Send Message"}
                            <Send size={16} />
                        </button>


                    </form>
                </div>

            </div>

        </section>
    )
}