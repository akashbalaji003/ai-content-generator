// "use client"
// import { Button } from '@/components/ui/button'
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import React, { useContext, useEffect, useState } from 'react'
// import { eq } from 'drizzle-orm'
// import { HISTORY } from '../history/page';
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { useRouter } from 'next/navigation';

"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import React, { useContext, useEffect, useState } from 'react'
import { eq } from 'drizzle-orm'
import { HISTORY } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';

function UsageTrack() {
    const router = useRouter();
    const {user} = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
   
    useEffect(() => {
        user && GetData();
    },[user]);

    const GetData = async() => {
        try {
            const result: HISTORY[] = await db.select().from(AIOutput)
            .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
           
            GetTotalUsage(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const GetTotalUsage = (result: HISTORY[]) => {
        let total: number = 0;
        result.forEach(element => {
            total = total + Number(element.aiResponse?.length);
        });
        setTotalUsage(total);
        console.log('Total usage:', total);
    }

    const handleUpgrade = () => {
        router.push('/dashboard/billing');
    }
   
    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#00FFB2] w-full rounded-full mt-2'>
                    <div className='h-2 bg-white rounded-full'
                    style={{width: Math.min((totalUsage/10000)*100, 100)+"%"}}>
                    </div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 Credits Used</h2>
                {totalUsage >= 10000 && (
                    <p className='text-red-200 text-xs mt-1'>
                        Credit limit reached! Please upgrade to continue.
                    </p>
                )}
            </div>
            <Button 
                variant={'secondary'} 
                className='w-full my-3 text-primary'
                onClick={handleUpgrade}
            >
                Upgrade
            </Button>
        </div>
    )
}

export default UsageTrack
//  function UsageTrack() {

    
//     const {user} = useUser();
//     const {totalUsage, setTotalUsage}=useContext(TotalUsageContext);
    
    
//     useEffect(() => {
//         user&&GetData();
//     },[user]);

//     const GetData=async()=>{
//         {/*@ts-ignore*/}
//         const result:HISTORY[] = await db.select().from(AIOutput)
//         .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress));
        
//         GetTotalUsage(result);
//     }

//     const GetTotalUsage=(result:HISTORY[])=>{
//         let total: number=0;
//         result.forEach(element => {
//             total=total+ Number(element.aiResponse?.length);

//         });
//         setTotalUsage(total)
//         console.log(total);
//     }
    
//   return (
//     <div className='m-5'>
//         <div className='bg-primary text-white p-3 rounded-lg'>
//             <h2 className='font-medium'>Credits</h2>
//             <div className='h-2 bg-[#00FFB2] w-full rounded-full mt-2'>
//                 <div className='h-2 bg-white rounded-full'
//                 style={{width: (totalUsage/10000)*100+"%"}}>

//                 </div>

//             </div>
//             <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit Used</h2>
//         </div>
//         <Button variant={'secondary'} className ='w-full my-3 text-primary'>Upgrade</Button>
//     </div>
//   )
// }

//export default UsageTrack