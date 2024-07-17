import { PageProps } from "@/app/types/PageProps";

interface IArticleListProps {
    params: PageProps;
}
export default function ArticleList({ params }: IArticleListProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>Article List page</h1>
            </div>
        </main>
    )
}