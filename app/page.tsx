import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const companies = [
  { name: "EY-Parthenon", logo: "/company-logos/ey-parthenon.png", link: "https://www.ey.com/en_gl/careers/parthenon" },
  { name: "inDrive", logo: "/company-logos/indrive.png", link: "https://careers.indrive.com/" },
  { name: "Delivery Hero", logo: "/company-logos/delivery-hero.png", link: "https://careers.deliveryhero.com/deliveryhero-jobs" },
  { name: "MediaForce", logo: "/company-logos/mediaforce.png", link: "https://mediaforce.com/careers/index.php" },
  { name: "Chatfuel", logo: "/company-logos/chatfuel.png", link: "https://chatfuel.breezy.hr/" },
  { name: "Spotify", logo: "/company-logos/spotify.png", link: "https://www.lifeatspotify.com/jobs" },
  { name: "Wheely", logo: "/company-logos/wheely.png", link: "https://wheely.com/en/careers" },
  { name: "McKinsey & Company", logo: "/company-logos/mckinsey.png", link: "https://www.mckinsey.com/careers/search-jobs" },
  { name: "Sentium Consulting", logo: "/company-logos/sentium.png", link: "https://www.linkedin.com/company/sentiumtech/?originalSubdomain=uk" },
  { name: "Zalando", logo: "/company-logos/zalando.png", link: "https://jobs.zalando.com/en/jobs" },
  { name: "Mollie", logo: "/company-logos/mollie.png", link: "https://jobs.picnic.app/en/vacancies" },
  { name: "Check24", logo: "/company-logos/check24.png", link: "https://jobs.check24.de/en/" },
  { name: "adjoe", logo: "/company-logos/adjoe.png", link: "https://adjoe.io/company/careers/" },
  { name: "Amazon", logo: "/company-logos/amazon.png", link: "https://www.amazon.jobs/en/" },
  { name: "EPAM", logo: "/company-logos/epam.png", link: "https://www.epam.com/careers" },
  { name: "Sixt", logo: "/company-logos/sixt.png", link: "https://www.sixt.jobs/us" },
  { name: "Tripleten", logo: "/company-logos/tripleten.png", link: "https://www.comeet.com/jobs/tripleten/98.008" },
  { name: "Criteo", logo: "/company-logos/criteo.png", link: "https://careers.criteo.com/en/" },
  { name: "BostonGene", logo: "/company-logos/bostongene.png", link: "https://bostongene.com/about-us/careers" },
  { name: "Glovo", logo: "/company-logos/glovo.png", link: "https://jobs.glovoapp.com/" },
  { name: "Monite", logo: "/company-logos/monite.png", link: "https://apply.workable.com/monite/" },
  { name: "OSCO", logo: "/company-logos/osco.png", link: "https://oscoconstructiongroup.com/careers/" },
  { name: "Wix", logo: "/company-logos/wix.png", link: "https://www.wix.com/jobs/locations/kyiv" },
  { name: "Bayer", logo: "/company-logos/bayer.png", link: "https://career.bayer.com/en/career" },
  { name: "Bolt", logo: "/company-logos/bolt.png", link: "https://bolt.eu/en/careers/positions/" },
  { name: "Adapty.io", logo: "/company-logos/adapty.png", link: "https://adapty.io/careers/" },
  { name: "BestSecret", logo: "/company-logos/bestsecret.png", link: "https://jobs.bestsecret.com/en/jobs.html" },
  { name: "AboutYou", logo: "/company-logos/aboutyou.png", link: "https://corporate.aboutyou.de/en/career" },
  { name: "Solaris SE", logo: "/company-logos/solaris.png", link: "https://www.solarisgroup.com/en/careers/" },
  { name: "MOIA", logo: "/company-logos/moia.png", link: "https://www.moia.io/en/career/moia-operations-gmbh" },
  { name: "Volkswagen", logo: "/company-logos/volkswagen.png", link: "https://www.volkswagen-group.com/en/careers-with-the-group-16105" },
  { name: "Mellifera", logo: "/company-logos/mellifera.png", link: "https://mellifera.team/careers/" }
]

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2B2F1B] text-[#E8EF88] py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto text-center">
            Accelerate your job search with a referral list for EU and fully remote positions
          </h1>
          <p className="text-lg">
            Unlock access to a list of IT professionals who can refer you to top tech companies or remote opportunities worldwide.
          </p>
        </div>
      </section>

      {/* Let's be honest Section */}
      <section className="bg-[#E8EF88] py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Let&apos;s be honest.</h2>
          <p className="text-xl mb-8">You&apos;re tired of this:</p>
          <div className="flex justify-center">
            <Image
              src="./cycle_illustration.png"
              alt="Job application cycle illustration"
              width={400}
              height={300}
              className="mb-4"
            />
          </div>
          <p className="text-center text-lg">There is a better way ↓</p>
        </div>
      </section>

      {/* Referrals Section */}
      <section className="bg-[#2B2F1B] text-[#E8EF88] py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">Referrals.</h2>
          <h3 className="text-2xl mb-6">Why does it help?</h3>
          <div className="mb-6">
            <Image
              src="./best_contacts.png"
              alt="Best contacts illustration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="mb-4">
              Referrals are one of the most reliable hiring methods, second only to internal transfers. When someone vouches for a candidate, there&apos;s a good chance the recommendation is trustworthy.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-[#E8EF88] py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">Products</h2>
          <Card className="max-w-sm mx-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4">Saver</h3>
              <div className="text-3xl font-bold mb-6">$14/3 months</div>
              <ul className="space-y-2">
                <li>• 3 months of access</li>
                <li>• Access to the list of 30+ professionals</li>
                <li>• EU and remote candidates</li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 p-6">
              <Button 
                className="w-full bg-[#2B2F1B] hover:bg-[#3F442C]"
                asChild
              >
                <Link href="https://buy.stripe.com/4gw01l4fS5ZG5kA6oo" target="_blank" rel="noopener noreferrer">
                  BUY LIST
                </Link>
              </Button>
              <p className="text-sm text-center">(you&apos;ll get access by email)</p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-[#FFFFD4] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8">Companies inside the list:</h2>
          <div className="flex flex-wrap justify-center">
            {companies.map((company, index) => (
              <div key={index} className="m-3 text-center w-[90px]">
                <Link href={company.link} target="_blank" rel="noopener noreferrer"
                  className="flex flex-col items-center text-[#0066cc] font-bold hover:text-[#004080] transition-all hover:scale-105">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={60}
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-xs p-2 rounded-md hover:bg-[#0066cc]/10 hover:underline">
                    {company.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-[#2B2F1B] text-[#E8EF88] py-8">
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-4 flex items-center justify-center w-full">
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4 flex items-center justify-center w-full">
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
            <span className="mx-4 text-2xl">Apply as a referral ★</span>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button 
            className="bg-[#E8EF88] text-[#2B2F1B] hover:bg-[#D4DB74] text-xl px-8 py-6"
            asChild
          >
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd_iHoP5fVJ-7HPSd-5b-QF-rXBuOrCtx2848x0OPbHFdPUGA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
              APPLY
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-[#E8EF88] py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4 [&>*]:border-b [&>*]:border-[#2B2F1B]/20">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="font-bold">What does it mean for a referral list to be updatable?</AccordionTrigger>
              <AccordionContent>
                It means we keep our referral list current, recognizing that people change jobs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-0">
              <AccordionTrigger className="font-bold">How frequently is the list refreshed?</AccordionTrigger>
              <AccordionContent>
                We aim to update it within a month of any job changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-0">
              <AccordionTrigger className="font-bold">What if a referral no longer works at the listed company?</AccordionTrigger>
              <AccordionContent>
                We aim to update it within a month of any job changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-0">
              <AccordionTrigger className="font-bold">If someone declines to refer you to their company, what should you do?</AccordionTrigger>
              <AccordionContent>
                We aim to update it within a month of any job changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-0">
              <AccordionTrigger className="font-bold">How should you approach someone for a referral?</AccordionTrigger>
              <AccordionContent>
                Introduce yourself, briefly share your experience, mention where you found their contact, and attach your CV in &quot;CV_lastname_firstname&quot; format.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2F1B] text-[#E8EF88] py-8 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <div className="text-2xl font-bold">Referral Radar</div>
          <Link href="mailto:atoyan.geor@gmail.com" className="hover:underline">
            atoyan.geor@gmail.com
          </Link>
          <div className="flex gap-4">
            <Link href="https://drive.google.com/file/d/1_0J4FdBgNDzcUfX0BuJSknpfq0doHq2w/view?usp=drive_link" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Terms of use
            </Link>
            <Link href="https://drive.google.com/file/d/1HMKtI2XSVRtbeI1WHSVEOYQxn1AJ-P-m/view?usp=drive_link" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Privacy policy
            </Link>
            <Link href="https://billing.stripe.com/p/login/00g7tp4y24yJ56odQQ" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Manage subscription
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}