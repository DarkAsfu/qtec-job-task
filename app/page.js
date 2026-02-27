
import Banner from './components/Banner';
import Companies from './components/Companies';
import ExploreCategories from './components/ExploreCategories';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <Companies/>
      <ExploreCategories/>
    </div>
  );
}