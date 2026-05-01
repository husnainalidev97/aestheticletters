import SEOContent from "./SEOContent";
import Sidebar from "./Sidebar";

export default function SEOSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-[150px] py-24 bg-surface-container-low">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <SEOContent />
        <Sidebar />
      </div>
    </section>
  );
}
