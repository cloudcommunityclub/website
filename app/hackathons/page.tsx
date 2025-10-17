import Link from "next/link";

const hackathons = [
  {
    id: "hack1",
    name: "AI Innovation Challenge",
    date: "Nov 10 - Nov 12, 2025",
    shortDesc: "Build cutting-edge AI solutions to real-world problems.",
    image: "https://via.placeholder.com/300x200?text=AI+Hackathon",
  },
  {
    id: "hack2",
    name: "Web3 Builders Fest",
    date: "Dec 1 - Dec 3, 2025",
    shortDesc: "Explore decentralized tech and create blockchain apps.",
    image: "https://via.placeholder.com/300x200?text=Web3+Fest",
  },
];

export default function HackathonListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Hackathons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hack) => (
          <Link key={hack.id} href={`/hackathons/${hack.id}`}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer">
              <img src={hack.image} alt={hack.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{hack.name}</h2>
                <p className="text-gray-500 text-sm mb-2">{hack.date}</p>
                <p className="text-gray-700">{hack.shortDesc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

