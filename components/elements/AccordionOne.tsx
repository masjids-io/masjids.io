'use client'
import { useState } from "react"
import * as Icon from 'react-feather'

// Define the structure for an FAQ item
interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

// Define the data for the FAQ section
const faqData: FaqItem[] = [
    {
        id: 1,
        question: "What is Masjids.io?",
        answer: "Masjids.io is a modern digital platform designed to help mosques connect with their communities. It offers a suite of tools for managing prayer times, events, announcements, and online donations, all in one place."
    },
    {
        id: 2,
        question: "How can my masjid get started with Masjids.io?",
        answer: "Getting started is simple! Visit our website and click on the 'Get Started' or 'Register' button. You'll be guided through the process of setting up your masjid's profile, customizing your page, and can start using the features right away."
    },
    {
        id: 3,
        question: "Is there a mobile app for our community members?",
        answer: "Yes, Masjids.io provides dedicated mobile apps for both iOS and Android. This allows your community members to easily access prayer times, receive notifications, view events, and donate directly from their smartphones."
    },
    {
        id: 4,
        question: "How does the online donation system work?",
        answer: "Our secure donation system allows members to contribute to your masjid easily and safely online. Masjids can create multiple donation campaigns (e.g., for Zakat, Sadaqah, or building funds) and track all contributions through the admin dashboard."
    },
    {
        id: 5,
        question: "Can we customize our masjid's page?",
        answer: "Absolutely. You have full control to customize your masjid's page with your logo, branding, photos, and information. You can also manage and post your own prayer schedules, events, and announcements to keep your community informed."
    }
];

interface ActiveState {
    status: boolean;
    key: number | null; // Allow null for no active item
}

export default function AccordionOne() {
    const [active, setActive] = useState<ActiveState>({
        status: true, // Set to true to have the first item open by default
        key: 1,       // The key of the item to be open by default
    });

    const handleToggle = (key: number) => {
        if (active.key === key) {
            setActive({ status: false, key: null }); // Close the item if it's already open
        } else {
            setActive({ status: true, key }); // Open the new item
        }
    };

    return (
        <>
            <div className="accordion -simple md:mt-24 js-accordion">
                {faqData.map((faq) => (
                    <div
                        key={faq.id}
                        className={`accordion__item ${active.key === faq.id ? "is-active" : ""}`}
                        onClick={() => handleToggle(faq.id)}
                    >
                        <div className="accordion__button text-black">
                            <div className="accordion__icon">
                                <Icon.Plus className="icon" />
                                <Icon.Minus className="icon" />
                            </div>
                            <button className="text-lg md:text-base fw-600 text-black text-start">
                                {faq.question}
                            </button>
                        </div>
                        <div
                            className="accordion__content"
                            style={{ maxHeight: active.key === faq.id ? '150px' : '0px' }} // Increased max-height for longer answers
                        >
                            <div className="accordion__content__inner">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}