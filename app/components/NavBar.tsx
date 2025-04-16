"use client"
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';

function NavBar() {

    const pathname = usePathname();
    // console.log('Current URL:', pathname);

    const { data: session } = useSession();
    // console.log('Session:', session);

    const router = useRouter();
  
    return (    
    <nav className="w-[90%] mx-auto py-4 px-6 flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
        { pathname !== '/' ? (
            <div className='pr-5'>
                <a href="/" className="hover:text-primary transition-colors">
                <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M7 13L1 7L7 1"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </a>
            </div>
        ) : null }  
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75l9-6 9 6v9.75a2.25 2.25 0 01-2.25 2.25h-13.5A2.25 2.25 0 013 19.5V9.75z"
            />
        </svg>
        <span className="text-xl font-semibold text-gray-700">Bodima</span>
        </div>

        {/* Center Section - Links (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <li>
            <a href="/" className="hover:text-primary transition-colors">
            Home
            </a>
        </li>
        <li>
            <a href="/about-us" className="hover:text-primary transition-colors">
            About Us
            </a>
        </li>
        <li>
            <a href="/contact-us" className="hover:text-primary transition-colors">
            Contact Us
            </a>
        </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="flex items-center space-x-2">
            {session ? (
                <div className="flex items-center gap-4">
                {session.user?.image ? (
                  <img
                    src={session.user.image || "/placeholder.svg    "}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 p-1 bg-gray-100 rounded-full" />
                )}
                <Button variant="outline" className='border-primary text-primary hover:bg-primary hover:text-background transition-colors px-4 py-2' onClick={() => signOut()}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </Button>
              </div>
            ):( 
                <>
                    <Button variant="outline" onClick={() => router.push('/login')} className='border-primary text-primary hover:bg-primary hover:text-background transition-colors px-4 py-2'>
                        Login
                    </Button>
                    <Button variant="outline" onClick={() => router.push('/login')} className='border-primary text-primary hover:bg-primary hover:text-background transition-colors px-4 py-2'>
                        Register
                    </Button>
                </>
            )}
            <Button>
                POST YOUR AD
            </Button>
        </div>
    </nav>
  )
}

export default NavBar