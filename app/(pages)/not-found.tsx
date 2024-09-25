import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <main>
            <div className='container'>
                <h1>404</h1>
                <h2>Stranica nije pronađena</h2>
                <Link href={'/'} aria-label='Vrati se na početnu'>Vrati se na početnu</Link>
            </div>
        </main>
    )
}