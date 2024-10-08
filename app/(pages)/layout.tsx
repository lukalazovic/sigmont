export const revalidate = 30;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../globals.css";
import { Header, Footer } from "../features";
import { siteSettingsPageQuery } from "../groq/documents/siteSettings/siteSettings";
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
            ctaLink,
            showPhone,
            mainNavigation,
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
            mainNavigation: footerNavigationItems
        }
    } = await client.fetch(siteSettingsPageQuery());

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header
                    ctaLink={ctaLink}
                    logoDesktopUrl={logo}
                    logoMobileUrl={mobileLogo}
                    showPhoneNumber={showPhone}
                    navigationItems={mainNavigation}
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
                    mobileLogoUrl={mobileLogo}
                    socialNetworks={socialNetworks}
                    navigationItems={footerNavigationItems}
                />
            </body>
        </html>
    );
}
