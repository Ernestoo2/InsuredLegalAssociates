import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    
    return (
        <section className='bg-[#E8E9E1] '>
            {children}
        </section>
    );
}
