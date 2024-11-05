import Link from "next/link"

export const Navigation = () => {
return {
    <nav>
     <Link href="/" className="mr-4 text-blue-500"> 
      Home
     </Link>
     <Link href="/about" className="mr-4 text-blue-500"> 
      About me 
     </Link>
     <Link href="/projects" className="mr-4 text-blue-500"> 
      Projects
     </Link>
    </nav>
}
}