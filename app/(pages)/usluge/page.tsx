import { PageProps } from "@/app/types/web/PageProps";

interface IServiceListProps {
    params: PageProps;
}
export default function ServiceList({ params }: IServiceListProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>Usluge</h1>
            </div>
        </main>
    )
}