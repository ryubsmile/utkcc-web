import Entry from '@/components/entry';
import About from '../(subpages)/about/page';
import Executives from '../(subpages)/executives/page';
import Sponsors from '../(subpages)/sponsors/page';
import Resources from '../(subpages)/resources/page';
import Newsletter from '../(subpages)/newsletter/page';
import EventsHomeIntro from '../(subpages)/events/eventsHomeIntro';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#fafafa]">
      <Entry />
      <div className="pl-safe-left pr-safe-right">
        <div className="px-4 lg:px-32 z-50 flex flex-col gap-y-6 mb-[10vh]">
          {/* about intro */}
          <About />
          {/* events intro */}
          <EventsHomeIntro />
          {/* exec intro */}
          <Executives />
          {/* sponsors intro */}
          <Sponsors />
          {/* resources intro */}
          <Resources />
          {/* newsletter intro */}
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
