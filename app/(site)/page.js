
import Banner from '../components/Banner';
import Companies from '../components/Companies';
import ExploreCategories from '../components/ExploreCategories';
import FeaturedJobs from '../components/FeaturedJobs';
import Footer from '../components/Footer';
import LatestJobsOpen from '../components/LatestJobsOpen';
import PromoSection from '../components/PromoSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <Companies/>
      <ExploreCategories/>
      <PromoSection/>
      <FeaturedJobs/>
      <LatestJobsOpen/>
      <Footer/>
    </div>
  );
}