'use client';
import { useForm } from 'react-hook-form';
import { IListing } from '../../types';
import { useRouter } from 'next/navigation';

export default function ListingForm({ onSubmit, initialData }: {
  onSubmit: (data: IListing) => void,
  initialData?: IListing
}) {
  const { register, handleSubmit } = useForm<IListing>({
    defaultValues: initialData || {} as IListing
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input {...register('name')} placeholder="Name" className="border p-2" required />
      <input {...register('mobileNumber')} placeholder="Mobile Number" className="border p-2" required />
      <input {...register('mainImage')} placeholder="Main Image URL" className="border p-2" required />
      <input {...register('images.0')} placeholder="Image URL 1" className="border p-2" />
      <input {...register('images.1')} placeholder="Image URL 2" className="border p-2" />
      <input {...register('address')} placeholder="Address" className="border p-2" required />
      <textarea {...register('description')} placeholder="Description" className="border p-2" required />
      <select {...register('gender')} className="border p-2">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="both">Both</option>
      </select>
      <input type="number" {...register('roomCapacity')} placeholder="Room Capacity" className="border p-2" required />
      <input type="number" {...register('price')} placeholder="Price" className="border p-2" required />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
}
