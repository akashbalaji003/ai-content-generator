// "use client"
// import React, { useContext, useState } from 'react'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft } from 'lucide-react'
// import FormSection from '../_components/FormSection'
// import OutputSection from '../_components/OutputSection'
// import { TEMPLATE } from '../../_components/TemplateListSection'
// import Templates from '@/app/(data)/Templates'
// import { chatSession } from '@/utils/AiModal'
// import { db } from '@/utils/db'
// import { AIOutput } from '@/utils/schema'
// import { useUser } from '@clerk/nextjs'
// import moment from 'moment'
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
// import { useRouter } from 'next/navigation'
// interface PROPS {
//   params: {
//     'template-slug': string;
//   };
// }

// function CreateNewContent(props: PROPS) {
//   const selectedTemplate: TEMPLATE | undefined = Templates?.find((items) => items.slug === props.params['template-slug']);
//   const [loading, setLoading] = useState(false);
//   const [aiOutput, setAiOutput] = useState<string>('');
//   const {user} = useUser();
//   const router = useRouter();
//   const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
//   const GenerateAIcontent = async (formData: any) => {
//   if(totalUsage >= 10000) {
//     alert("You've reached your 10,000 credit limit! Please upgrade your plan to continue.");
//     router.push('/dashboard/billing');
//     return;
//   }
  
//   setLoading(true);
//   try {
//     const SelectedPrompt = selectedTemplate?.aiPrompt;
//     const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
   
//     const result = await chatSession.sendMessage(FinalAIPrompt);
//     const responseText = await result.response.text();
   
//     console.log(responseText);
//     setAiOutput(responseText);
//     await SaveInDb(formData, selectedTemplate?.slug, responseText);
    
//     // Update usage after generating content
//     setTotalUsage(totalUsage + responseText.length);
    
//   } catch (error) {
//     console.error('Error generating AI content:', error);
//     setAiOutput('Error generating content. Please try again.');
//   } finally {
//     setLoading(false);
//   }
//   }

//   const SaveInDb =async (formData:any, slug:any, aiResp:string) => {
//     const result=await db.insert(AIOutput).values({
//       formData:formData,
//       templateslug:slug,
//       aiResponse:aiResp,
//       createdBy:user?.primaryEmailAddress?.emailAddress,
//       createdAt:moment().format('MM/DD/YYYY'),
//     });

//     console.log(result);

//   }
 
//   return (
//     <div className="p-10">
//       <Link href="/dashboard">
//         <Button><ArrowLeft />Back</Button>
//       </Link>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
//         {/* FormSection */}
//         <FormSection
//           selectedTemplate={selectedTemplate}
//           userFormInput={(v: any) => GenerateAIcontent(v)}
//           loading={loading} 
//         />
//         {/* OutputSection */}
//         <div className='col-span-2'>
//           <OutputSection aiOutput={aiOutput} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateNewContent
"use client"
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((items) => items.slug === props.params['template-slug']);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();
  const router = useRouter();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);

  const GenerateAIcontent = async (formData: any) => {
    // Convert totalUsage to number for comparison
    const currentUsage = Number(totalUsage);
    
    if(currentUsage >= 10000) {
      alert("You've reached your 10,000 credit limit! Please upgrade your plan to continue.");
      router.push('/dashboard/billing');
      return;
    }

    // Optional: Warning when close to limit
    if(currentUsage >= 9000) {
      const remainingCredits = 10000 - currentUsage;
      const confirm = window.confirm(`You have ${remainingCredits} credits remaining. Continue generating content?`);
      if(!confirm) return;
    }
 
    setLoading(true);
    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
     
      const result = await chatSession.sendMessage(FinalAIPrompt);
      const responseText = await result.response.text();
     
      console.log(responseText);
      setAiOutput(responseText);
      await SaveInDb(formData, selectedTemplate?.slug, responseText);
     
      // Update usage after generating content
      const newUsage = currentUsage + responseText.length;
      setTotalUsage(newUsage);
      
      // Log the usage update
      console.log(`Usage updated: ${currentUsage} + ${responseText.length} = ${newUsage}`);
     
    } catch (error) {
      console.error('Error generating AI content:', error);
      setAiOutput('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateslug: slug,
        aiResponse: aiResp,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('MM/DD/YYYY'),
      });
      console.log('Data saved to DB:', result);
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  }
 
  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button><ArrowLeft />Back</Button>
      </Link>
      
      {/* Display current usage */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          Credits Used: <span className="font-semibold">{Number(totalUsage)}/10,000</span>
          {Number(totalUsage) >= 9000 && (
            <span className="ml-2 text-red-600 font-semibold">
              ⚠️ Running low on credits!
            </span>
          )}
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIcontent(v)}
          loading={loading}
        />
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContent