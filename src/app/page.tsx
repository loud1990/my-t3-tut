import Link from "next/link";

const mockURLs = ["https://utfs.io/f/078a7ea1-0a75-4d3f-8af4-66a28f6f53ae-y7gqx8.jpg", "https://utfs.io/f/44124c97-947a-40be-8401-dfb54cab3490-qge0tk.jpg", 
"https://utfs.io/f/5e9bd8a3-dec4-484f-96c0-43709beeed26-5rxtjb.jpg", "https://utfs.io/f/907b83ac-b31f-4dc7-9030-a3cde02e5eba-u1311i.jpeg"];

const mockImages = mockURLs.map((url, index) => ({ 
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            </div>
        ))
      }
      </div>
    </main>
  );
}
