import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg relative">
        {/* Floating 404 background */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none" aria-hidden="true">
          <span className="text-[12rem] md:text-[16rem] font-serif font-bold text-alesvia-primary/[0.04] select-none leading-none">
            404
          </span>
        </div>

        <div className="morph-blob mx-auto w-24 h-24 bg-gradient-to-br from-alesvia-accent/20 to-alesvia-primary/10 mb-8" />

        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
          Off the grid.
        </h1>
        <p className="text-lg text-alesvia-muted mb-2">
          This page doesn&apos;t exist — which, ironically, is exactly the kind of boundary we advocate for.
        </p>
        <p className="text-sm text-alesvia-muted/60 mb-10">
          Some things are better left unfound.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-alesvia-primary text-alesvia-bg px-8 py-4 rounded-lg font-medium hover:bg-alesvia-primary/90 transition-all shadow-lg hover:-translate-y-0.5 text-center"
          >
            Return to baseline
          </Link>
          <Link
            href="/initiatives/unplugged"
            className="glass px-8 py-4 rounded-lg font-medium text-alesvia-text hover:border-alesvia-accent/50 transition-all text-center"
          >
            Explore Unplugged
          </Link>
        </div>
      </div>
    </div>
  );
}
