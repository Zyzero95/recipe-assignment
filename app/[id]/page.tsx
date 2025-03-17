export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    return <h1>Recipe id: {resolvedParams.id}</h1>
}