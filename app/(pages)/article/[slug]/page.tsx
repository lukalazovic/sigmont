import { PageProps } from "@/app/types/PageProps";

interface IArticleProps {
    params: PageProps;
}
export default function Article({ params }: IArticleProps) {
    const { slug } = params;

    return (
        <main>
            <div className="container mt-5">
                <h1>Article page {slug}</h1>
            </div>
        </main>
    )
}