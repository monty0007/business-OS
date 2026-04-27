import { BlurFade } from "../ui/blur-fade";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials1 = [
  {
    quote:
      "The Tally integration has been transformative. What earlier took hours of manual entry now syncs seamlessly in minutes.",
    name: "Vadivel CMA",
    title: "Founder at Vadivel & Co",
  },
  {
    quote:
      "Business OS has eliminated the repetitive task of converting bank statements into Tally entries. The way it blends into our traditional accounting processes is seamless.",
    name: "Sunil",
    title: "CAlculators – The Tax People",
  },
  {
    quote:
      "What impressed us most was the document management system. Our clients can access reports 24/7. It's elevated our firm's professional image significantly.",
    name: "Adarsh MG",
    title: "Managing Partner at Acc 'N' More",
  },
];

const testimonials2 = [
  {
    quote:
      "If this works the way you showed me, then definitely yes — we're switching.",
    name: "Siddhartha Paul",
    title: "Owner",
  },
  {
    quote:
      "My God, you will replace all the accountants.",
    name: "Mohammed Rampurawala",
    title: "CA / Consultant",
  },
  {
    quote:
      "If AI can do what we've been doing for 30 days in one or two days — that changes everything.",
    name: "Karthika Varadharajan",
    title: "Financial Consultant",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden">
      <div className="w-full section-card overflow-hidden py-16 md:py-24 min-h-screen flex flex-col justify-evenly">
      <div className="px-4 md:px-8">
        <BlurFade>
          <p className="mb-4 text-sm font-mono text-orange-400 uppercase tracking-wider text-center">
            Testimonials
          </p>
          <h2 className="mb-10 text-center font-body text-2xl font-bold text-zinc-900 md:text-3xl">
            What people say after seeing{" "}
            <span className="text-orange-600">Business OS</span>
          </h2>
        </BlurFade>
      </div>

      <div className="space-y-6">
        <InfiniteMovingCards
          items={testimonials1}
          direction="left"
          speed="normal"
        />
        <InfiniteMovingCards
          items={testimonials2}
          direction="right"
          speed="normal"
        />
      </div>
      </div>
    </section>
  );
}
