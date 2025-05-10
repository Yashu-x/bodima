"use client"
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { LogOut, Menu } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import DotsLoader from './DotsLoader';

function NavBar() {
  const pathname = usePathname();
  const { data: session,status } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Logo and Back Button */}
        <div className="flex items-center space-x-3">
          {pathname !== '/' && (
            <div className="pr-2">
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
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

        {/* Center - Nav Links (desktop) */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="/about-us" className="hover:text-primary transition-colors">About Us</a></li>
          <li><a href="/contact-us" className="hover:text-primary transition-colors">Contact Us</a></li>
        </ul>

        {/* Right - Auth Buttons */}
        <div className="hidden md:flex items-center space-x-2">
          {status === 'loading' ? <><DotsLoader/></>
          : session ? (
            <div className="flex items-center gap-4">
                <Popover>
                    <PopoverTrigger>{session.user?.image ? (
                        <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-8 h-8 rounded-full"
                        />
                    ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-full" />
                    )}
                    </PopoverTrigger>
                    <PopoverContent>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-background transition-colors w-full"
                            onClick={() => signOut()}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign out
                        </Button>
                    </PopoverContent>
                </Popover>
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={() => router.push('/login')} className="border-primary text-primary hover:bg-primary hover:text-background">Login</Button>
              <Button variant="outline" onClick={() => router.push('/login')} className="border-primary text-primary hover:bg-primary hover:text-background">Register</Button>
            </>
          )}
          <Button className="ml-2">POST YOUR AD</Button>
        </div>

        {/* Hamburger Icon (mobile) */}
        <div className="md:hidden">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 px-2 space-y-2 text-gray-700">
          <a href="/" className="block hover:text-primary">Home</a>
          <a href="/about-us" className="block hover:text-primary">About Us</a>
          <a href="/contact-us" className="block hover:text-primary">Contact Us</a>
          <hr />
          {session ? (
            <div className="flex items-center space-x-3">
              <Popover>
                    <PopoverTrigger>{session.user?.image ? (
                        <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-8 h-8 rounded-full"
                        />
                    ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-full" />
                    )}
                    </PopoverTrigger>
                    <PopoverContent>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-background transition-colors w-full"
                            onClick={() => signOut()}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign out
                        </Button>
                    </PopoverContent>
                </Popover>
                <p>{session.user?.name}</p>
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={() => router.push('/login')} className="w-full border-primary text-primary hover:bg-primary hover:text-background">Login</Button>
              <Button variant="outline" onClick={() => router.push('/login')} className="w-full border-primary text-primary hover:bg-primary hover:text-background">Register</Button>
            </>
          )}
          <Button className="w-full">POST YOUR AD</Button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
