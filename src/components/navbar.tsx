import { UserButton } from "@clerk/nextjs";

import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div className="flex items-center p-4">
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   );
}
 
export default Navbar;