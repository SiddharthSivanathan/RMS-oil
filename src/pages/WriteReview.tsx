import { useState } from "react";
import { useForm } from "react-hook-form";
import { Camera, CheckCircle2, Star } from "lucide-react";
import { Seo } from "../components/Seo";
import { PageShell, SectionHeading } from "../components/ui";
import { products } from "../data/site";

type ReviewForm = { name: string; product: string; rating: string; review: string; photo?: FileList };

export function WriteReview() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit } = useForm<ReviewForm>();
  return (
    <PageShell>
      <Seo title="Write a Review | RMS Gold" description="Share your RMS Gold product experience with star rating, product selection, photo upload and feedback form." path="/write-review" keywords={["Customer Reviews", "Cold Pressed Oil"]} />
      <section className="px-4 pb-14 pt-32 md:px-8">
        <SectionHeading eyebrow="Write a Review" title="Tell us how RMS Gold lives in your kitchen." />
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-24 md:px-8 lg:grid-cols-[1fr_0.7fr]">
        <form onSubmit={handleSubmit(() => setSubmitted(true))} className="rounded-lg bg-white/80 p-6 shadow-luxury md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-forest">Name<input {...register("name", { required: true })} className="rounded-lg border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold" /></label>
            <label className="grid gap-2 text-sm font-semibold text-forest">Product<select {...register("product", { required: true })} className="rounded-lg border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold">{products.map((product) => <option key={product.slug}>{product.name}</option>)}</select></label>
            <label className="grid gap-2 text-sm font-semibold text-forest">Rating<select {...register("rating", { required: true })} className="rounded-lg border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold"><option>5 Stars</option><option>4 Stars</option><option>3 Stars</option></select></label>
            <label className="grid gap-2 text-sm font-semibold text-forest">Photo upload<span className="flex items-center gap-2 rounded-lg border border-dashed border-forest/20 bg-cream px-4 py-3"><Camera size={18} /> Add photo<input {...register("photo")} className="sr-only" type="file" accept="image/*" /></span></label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-forest">Feedback<textarea {...register("review", { required: true })} rows={7} className="rounded-lg border border-forest/15 bg-cream px-4 py-3 outline-none focus:border-gold" /></label>
          <button className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-bold text-ivory shadow-luxury">Submit review</button>
        </form>
        <aside className="rounded-lg bg-forest p-8 text-ivory">
          {submitted ? <><CheckCircle2 className="text-gold" size={38} /><h2 className="mt-5 font-serif text-4xl">Thank you.</h2><p className="mt-4 text-ivory/70">Your review has entered moderation and will appear in the review timeline after approval.</p></> : <><div className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" />)}</div><h2 className="mt-5 font-serif text-4xl">Review analytics</h2><p className="mt-4 text-ivory/70">96+ reviews, 4.9 average rating, with groundnut and sesame oil leading repeat purchase mentions.</p></>}
        </aside>
      </section>
    </PageShell>
  );
}
