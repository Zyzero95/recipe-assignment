export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const id: number = (await params).id;
    return <h1>Recipe id: {id}</h1>
}