import { PageProps } from "@/app/types/web/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default function Landing({ params }: ILandingProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>{slug}</h1>
            </div>
        </main>
    )
}