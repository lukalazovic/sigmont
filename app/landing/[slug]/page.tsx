import { PageProps } from "@/types/PageProps";

interface ILandingProps {
    params: PageProps;
}
export default function Landing({ params }: ILandingProps) {
    const { slug } = params;
    
    return (
        <div>Landing page {slug} </div>
    )
}