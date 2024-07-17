import { PageProps } from "@/app/types/PageProps";

interface IArticleProps {
    params: PageProps;
}
export default function Contact({ params }: IArticleProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>Contact page</h1>
            </div>
        </main>
    )
}