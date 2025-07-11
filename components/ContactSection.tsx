import { contactLinks } from '@/lib/contact'
import React from 'react'
import ContactLink from './ContactLink'
import PrimaryButtonLink from './Button/ButtonLink/PrimaryButtonLink'

export default function ContactSection() {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-3xl">
                I'm easy to talk to
            </h2>

            <div className="flex flex-col gap-2">
                <p>
                    If you've got a clear scope, that's great. But even if you have just a fuzzy idea, I'm happy to chat.
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
                    Or, if you'd prefer, you can book a call with me:
                </p>

                <PrimaryButtonLink external className={'w-fit'} href={'/call'}>
                    Let's have a call
                </PrimaryButtonLink>
            </div>
        </div>
    )
}
