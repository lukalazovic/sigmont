import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container mt-5">
                <h1>Homepage</h1>
                <h2 className="mt-5">List of Links</h2>
                <ul>
                    <li><a href="/studio" target="_blank">Studio</a></li>
                    <li><a href="/landing/34">Landing page 34</a></li>
                    <li><a href="/kontakt">Contact page</a></li>
                    <li><a href="/usluge/limarski-radovi">Limarski radovi</a></li>
                    <li><a href="/usluge/49">Service page 49</a></li>
                </ul>
            </div>
        </main>
    );
}
