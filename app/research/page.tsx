import type { Metadata } from 'next';
import ResearchClient from './client';

export const metadata: Metadata = {
  title: 'Research',
};

export default function Research() {
  return (
    <ResearchClient />
  );
}
