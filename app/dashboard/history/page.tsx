'use client'

import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { TEMPLATE } from '../_components/TemplateListSection'

export interface HISTORY {
  id: number,
  formData: string | null,
  aiResponse: string | null,
  templateslug: string,
  createdBy: string | null,
  createdAt: string | null
}

function History() {
  const { user } = useUser();
  const [historyList, setHistoryList] = useState<HISTORY[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const userEmail = user?.primaryEmailAddress?.emailAddress;
        if (!userEmail) {
          setError('User not found.');
          return;
        }

        const data = await db.select().from(AIOutput)
          .where(eq(AIOutput.createdBy, userEmail))
          .orderBy(desc(AIOutput.id));
        
        setHistoryList(data);
      } catch (err) {
        console.error('Error fetching history:', err);
        setError('Failed to fetch history.');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchHistory();
    }
  }, [user]);

  // Helper function to get template data
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find((item) => item.slug === slug);
    return template || { name: 'Unknown', icon: '/default-icon.png' };
  }

  const copyToClipboard = async (aiResponse: string | null) => {
    if (!aiResponse) return;
    
    try {
      await navigator.clipboard.writeText(aiResponse);
      // You could add a toast notification here
      console.log('Copied to clipboard');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='m-5 p-5 border rounded-lg bg-white'>
      <h2 className='font-bold text-3xl'>History</h2>
      <p className='text-gray-500'>Search your previously generated AI content</p>
     
      {/* Table Header */}
      <div className='grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3'>
        <h2 className='col-span-2'>TEMPLATE</h2>
        <h2 className='col-span-2'>AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>
      
      {/* Table Body */}
      {historyList.length === 0 ? (
        <p>No history found.</p>
      ) : (
        historyList.map((item: HISTORY, index: number) => (
          <div className='grid grid-cols-7 my-5 py-3 px-3' key={index}>
            <h2 className='col-span-2 flex gap-2 items-center'>
              <Image 
                src={GetTemplateName(item?.templateslug)?.icon || '/default-icon.png'} 
                alt='Template Icon' 
                width={25} 
                height={25} 
              />
              {GetTemplateName(item.templateslug)?.name}
            </h2>
            <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse ?? 'No Response'}</h2>
            <h2>{item?.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Unknown Date'}</h2>
            <h2>{item?.aiResponse?.length || 0}</h2>
            <h2>
              <Button 
                variant='ghost' 
                className='text-primary'
                onClick={() => copyToClipboard(item.aiResponse)}  
              >
                Copy
              </Button>
            </h2>
          </div>
        ))
      )}
      <hr/>
    </div>
  );
}

export default History;