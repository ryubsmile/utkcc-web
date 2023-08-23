import About from '../(subpages)/about/page';
import Executives from '../(subpages)/executives/page';
import Sponsors from '../(subpages)/sponsors/page';
import Resources from '../(subpages)/resources/page';
import Newsletter from '../(subpages)/newsletter/page';
import Slides from '@/components/slides';
import EventsHomeIntro from '../(subpages)/events/eventsHomeIntro';

export default function Home() {
  return (
    <div className="flex-col">
      <Slides />
      <div className="px-8 lg:px-32 z-50 flex flex-col gap-y-[15vh] mb-[10vh]">
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
  );
}
