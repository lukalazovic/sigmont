import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="container mt-5">
                <h1>Homepage</h1>
                <h3 className="mt-5">List of Links</h3>
                <ul>
                    <li><a href="/studio">studio</a></li>
                    <li><a href="/landing/34">landing page 34</a></li>
                    <li><a href="/about">about page</a></li>
                    <li><a href="/contact">contact page</a></li>
                    <li><a href="/article/34">article list page</a></li>
                    <li><a href="/article/49">article page 49</a></li>
                </ul>
            </div>
        </main>
    );
}
