import type { Metadata } from 'next';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: 'Research - The Centered Organization',
};

export default function Page() {
  return (
    <div className="research-page">
      <Header backButtonLink="/research" />
      <div className="w-svw h-svh">
        <iframe
          src="https://upliftdemo.betterup.co/research-gartner/the-centered-organization"
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
