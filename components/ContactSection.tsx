import { contactLinks } from '@/lib/contact'
import React from 'react'
import ContactLink from './ContactLink'
import PrimaryButtonLink from './Button/ButtonLink/PrimaryButtonLink'

export default function ContactSection() {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl">
                I&apos;m easy to talk to
            </h2>

            <div className="flex flex-col gap-2">
                <p>
                    If you&apos;ve got a clear scope, that&apos;s great. But even if you have just a fuzzy idea, I&apos;m happy to chat.
                </p>
                <p>
                    You can also reach me through any of these:
                </p>
            </div>

            <div className="flex flex-col items-start gap-2">
                {contactLinks.map((link, i) => (<ContactLink key={i} link={link} />))}
            </div>

            <div className="flex flex-col gap-4 py-6">
                <p>
                    Or, if you&apos;d prefer, you can book a call with me:
                </p>

                <PrimaryButtonLink external className={'w-full sm:w-fit'} href={'/call'}>
                    Let&apos;s have a call
                </PrimaryButtonLink>
            </div>
        </div>
    )
}
