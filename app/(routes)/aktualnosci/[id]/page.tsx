async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>aktuanlność: {id}</div>;
}

export default page;
