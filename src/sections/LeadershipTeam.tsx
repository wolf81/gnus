import haraImage from '../assets/images/michael-hara.jpg';
import hurleyImage from '../assets/images/kenneth-hurley.jpg';
import northrupImage from '../assets/images/george-northrup.jpg'

import ProfileCard from "../components/ui/ProfileCard";
import SectionHeader from '../components/layout/SectionHeader';

export default function LeadershipTeam() {
  return (
    <>
      <SectionHeader title="Leadership Team" description="Built by Top Talent from NVIDIA, Google, Amazon, and more. Dedicated to making AI compute affordable and accessible." />
      <div className="flex gap-4 py-10">
        <ProfileCard name="Kenneth Hurley" role="Founder & CEO" image={hurleyImage} linkedIn='#' twitter='#'>
          Kenneth Hurley has worked at Amazon, Google, NVIDIA, Intel, and EA. With 40+ years in software and gaming, he’s built and scaled systems across platforms.
        </ProfileCard>
        <ProfileCard name="Michael Hara" role="Business Development" image={haraImage} linkedIn='#'>
          Michael Hara served 13 years as a Senior Vice President at NVIDIA and brings capital‑markets savvy, strategic leadership, and operational rigor.
        </ProfileCard>
        <ProfileCard name="George Northup" role="Board Member" image={northrupImage} linkedIn='#'>
          George Northup is a technology entrepreneur and investor with 25 years of leading and advising high‑growth companies.
        </ProfileCard>
      </div>
    </>
  )
}
