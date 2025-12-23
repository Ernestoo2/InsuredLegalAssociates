import type { ReactNode } from 'react';
import QualityLegalSection from '../components/QualityLegal';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

    return (
        <section className='bg-[#E8E9E1]'>
            {children}
            <QualityLegalSection
                title="We Help You With Quality Legal Lawyer"
                description="Our news section highlights important legal developments, firm achievements, and client success stories. Discover how we make a difference."
                button="Get Started"
            />
        </section>
    );
}
