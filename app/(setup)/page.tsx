import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initialProfile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async() => {
    const profile = await InitialProfile()

    // if any server found load into the profile
    const server = await db.server.findFirst({
        where:{
            members:{
                some:{
                    profileId:profile.id,
                }
            }
        }
    })

    if(server) return redirect(`/servers/${server.id}`)
    return <InitialModal/>
}
 
export default SetupPage;