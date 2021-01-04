import  Link  from 'next/link';

const people = [
    {v: "car", name: "bruno"},
    {v: "bike", name: "john"},
    {v: "helicopter", name: "nick"}
];

export default function Details() {
    return (
        <div>
            <h1>Details</h1>
            {people.map(e=>(
                <div>
                    <Link as ={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                        <a>Navigate to {e.name}'s {e.v}</a>
                    </Link>
                </div>
            ))}
        </div>
    )
  }