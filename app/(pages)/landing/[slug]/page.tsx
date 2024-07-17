import { PageProps } from "@/types/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default function Landing({ params }: ILandingProps) {
    const { slug } = params;
    
    return (
        <main>
            <div className="container mt-5">
                <h1>Landing page {slug}</h1>
            </div>
        </main>
    )
}