import PageTemplate from '@/components/PageTemplate'
import ProfilePicture from '@/components/ProfilePicture';
import { Testimonial, testimonials } from '@/lib/testimonials'
import React from 'react'

export default function Testimonials() {
    return (
        <PageTemplate title='What my clients are saying'>
            {testimonials.map((testimonial, i) => (<TestimonialCard key={i} testimonial={testimonial} />))}
        </PageTemplate>
    )
}

type TestimonialCardProps = { testimonial: Testimonial };
function TestimonialCard({ testimonial: { client, title, feedback, profilePicture } }: TestimonialCardProps) {
    return (
        <div className="flex items-center gap-6">
            <ProfilePicture src={profilePicture} />
            <div className="flex flex-col gap-8">
                <Quote />
                <p className='text-3xl font-light'>
                    {feedback}
                </p>
                <div className="flex flex-col">
                    <h2 className='text-xl font-bold'>
                        {client}
                    </h2>
                    <h3 className='text-gray-400'>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
}

function Quote() {
    return (
        <svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7812 30.0664L25.9531 15.9297C25.9818 13.2083 26.526 10.9023 27.5859 9.01172C28.6458 7.09245 29.9779 5.54557 31.582 4.37109C33.2148 3.16797 34.9193 2.29427 36.6953 1.75C38.5 1.20573 40.1615 0.933594 41.6797 0.933594C42.7109 0.933594 43.5846 1.03385 44.3008 1.23438L43.957 7.80859C41.8659 8.09505 40.4049 8.89714 39.5742 10.2148C38.7435 11.5326 38.2135 12.9935 37.9844 14.5977H43.957L43.3555 30.0664H25.7812ZM0 30.0664L0.171875 15.9297C0.200521 13.2083 0.744792 10.9023 1.80469 9.01172C2.86458 7.09245 4.19661 5.54557 5.80078 4.37109C7.43359 3.16797 9.13802 2.29427 10.9141 1.75C12.7188 1.20573 14.3802 0.933594 15.8984 0.933594C16.9297 0.933594 17.8034 1.03385 18.5195 1.23438L18.1758 7.80859C16.0846 8.09505 14.6237 8.89714 13.793 10.2148C12.9622 11.5326 12.4323 12.9935 12.2031 14.5977H18.1758L17.5742 30.0664H0Z" className='fill-spring-400' />
        </svg>
    );
}