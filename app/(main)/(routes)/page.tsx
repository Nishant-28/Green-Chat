import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const state=false // can be used as dynamic cases

export default function Home() {
  return (
    <div className="">
      <UserButton
        afterSignOutUrl="/"
      />
    </div>
  )
}
