import type { Metadata } from 'next';
import WhoWeAreClient from './client';

export const metadata: Metadata = {
  title: 'Who We Are',
};

export default function WhoWeAre() {
  return (
    <WhoWeAreClient />
  );
}
