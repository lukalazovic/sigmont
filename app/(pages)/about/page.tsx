import { PageProps } from "@/types/PageProps";

interface IAboutProps {
    params: PageProps;
}
export default function About({ params }: IAboutProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>About page</h1>
            </div>
        </main>
    )
}