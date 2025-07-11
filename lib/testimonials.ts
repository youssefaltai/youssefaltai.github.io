export type Testimonial = {
    client: string;
    title: string;
    profilePicture: string;
    feedback: string;
};

export const testimonials: Testimonial[] = [
    {
        client: 'Corae Young',
        title: 'CEO, Young Consulting Services, LLC.',
        profilePicture: '/clients/corae-young.png',
        feedback: 'Thank you so much for your flexibility and suggestions to enhance my website and upcoming conference. It was great to continue working with you and I appreciate your detailed work and responsiveness to this project. It is truly appreciated, thank you!',
    }
];