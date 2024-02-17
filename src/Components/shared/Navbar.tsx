import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

export default function Navbar() {
  const isUserLoggedIn = true;

  return (
    <nav className="fixed top-0 z-30 h-20 flex w-full items-center justify-between px-6 bg-gray-400">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <IoIosLogOut size={24} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcher: "py-2 px-4",
              },
            }}
          />
      </div>
    </nav>
  );
}
