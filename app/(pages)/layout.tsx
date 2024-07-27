export const revalidate = 30;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import { Footer } from "../features/Footer/Footer";
import { Header } from "../features/Header/Header";
import { siteSettingsPageQuery } from "../groq/siteSettings/siteSettings";
import client from "../client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sigmontt",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const {
        siteHeaderSettings: {
            ctaType,
            ctaLink,
            showPhone,
            ctaButtonLabel,
            navigationItems,
            menuSlideDirection,
            mobileHeaderPosition
        },
        globalSettings: {
            logo,
            mobileLogo,
            contactInfo,
            socialNetworks
        },
        siteFooterSettings: {
            desc,
            showLogo,
            subFooter,
            showSocial,
            navHeading,
            showAddress,
            navigationItems: footerNavigationItems
        }
    } = await client.fetch(siteSettingsPageQuery());

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header
                    ctaLink={ctaLink}
                    ctaType={ctaType}
                    logoDesktopUrl={logo}
                    logoMobileUrl={mobileLogo}
                    showPhoneNumber={showPhone}
                    ctaBtnLabel={ctaButtonLabel}
                    navigationItems={navigationItems}
                    phoneNumber={contactInfo?.phone[0]}
                    mobileMenuSlideIn={menuSlideDirection}
                    mobileHeaderPosition={mobileHeaderPosition}
                />
                {children}
                <Footer
                    desc={desc}
                    logoUrl={logo}
                    showLogo={showLogo}
                    subFooter={subFooter}
                    showSocial={showSocial}
                    navHeading={navHeading}
                    addressInfo={contactInfo}
                    showAddress={showAddress}
                    socialNetworks={socialNetworks}
                    navigationItems={footerNavigationItems}
                />
            </body>
        </html>
    );
}
