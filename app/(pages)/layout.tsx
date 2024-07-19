import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import { Footer } from "../components/Footer/Footer";
import { HeaderTemplate } from "../features/Header/HeaderTemplate";
import classNames from "classnames";

const menuItems = [
    {
        label: 'Home',
        url: '/'
    },
    {
        label: 'Articles',
        submenu: [
            { label: 'Tech Trends', url: '/article/tech-trends' },
            {
                label: 'Health & Wellness', url: '/article/health-wellness',
                submenu: [
                    { label: 'Nutrition Tips', url: '/article/nutrition-tips' },
                    {
                        label: 'Fitness Routines', url: '/article/fitness-routines',
                        submenu: [
                            { label: 'Cardio Workouts', url: '/article/cardio-workouts' },
                            {
                                label: 'Strength Training', url: '/article/strength-training',
                                submenu: [
                                    { label: 'Weight Lifting Basics', url: '/article/weight-lifting-basics' },
                                    { label: 'Bodyweight Exercises', url: '/article/bodyweight-exercises' },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        label: 'Landings',
        submenu: [
            { label: 'Consulting', url: '/landing/consulting' },
            {
                label: 'Training', url: '/landing/training',
                submenu: [
                    { label: 'Corporate Training', url: '/landing/corporate-training' },
                    { label: 'Personal Coaching', url: '/landing/personal-coaching' },
                ]
            },
            { label: 'Support', url: '/landing/support' },
        ]
    },
    {
        label: 'About Us',
        url: '/about'
    },
    {
        label: 'Contact',
        url: '/contact'
    },
    {
        label: 'Studio',
        url: '/studio'
    }
];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sigmontt",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* TODO: add class 'mt-helper' to body depends on does it have cta or phone in header */}
            <body className={classNames(inter.className, {['mt-helper'] : true})}>
                <HeaderTemplate
                    showCTA={true}
                    logoDesktopUrl="/"
                    menuItems={menuItems}
                    showPhoneNumber={true}
                    ctaLabel="Get in touch"
                    mobileMenuSlideIn={'right'}
                    // mobileHeaderPosition="bottom"
                />
                {children}
                <Footer />
            </body>
        </html>
    );
}
