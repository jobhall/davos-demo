import type { Metadata } from 'next';
import CustomersClient from './client';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Customers() {
  return (
    <CustomersClient />
  );
}
