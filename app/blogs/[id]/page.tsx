export default function BlogDetails({ params }: { params: { id:string }}) {
  return (
    <div className="p-5 text-black-900">
      <h1 className="text-3xl font-bold mb-4">Blog {params.id}</h1>
      <p>This is full blog content...</p>
      
    </div>
  );
}