'use client';
import { createDocument } from '@/lib/actions/room.actions';
import { Button } from './ui/button'
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

declare type AddDocumentBtnProps = {
  userId: string;
  email: string;
};

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();

  const addDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });

      if(room) router.push(`dashboard/documents/${room.id}`);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button type="submit" onClick={addDocumentHandler} className="bg-gradient-to-t from-blue-500 to-blue-400 flex gap-2 shadow-md">
      <Plus className='h-24 w-24 font-bold' />
      <p className="block">Create a document</p>
    </Button>
  )
}

export default AddDocumentBtn
