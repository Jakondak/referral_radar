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
  { name: "EY-Parthenon", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF5bP7S6f5pjw/company-logo_200_200/company-logo_200_200/0/1630502621158/ey_parthenon_logo?e=1735776000&v=beta&t=jWXCUoIwTp7Pl6vc_d5XUSQi_LKVxxTIRSQqJ-BoqN0", link: "https://www.ey.com/en_gl/careers/parthenon" },
  { name: "inDrive", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFyvILTG8HteA/company-logo_200_200/company-logo_200_200/0/1718219839070/indrive_logo?e=1735171200&v=beta&t=NbxeOWrxzDgiLLYwB2jueJfzIkpIbACji4mo0cP-aBU", link: "https://careers.indrive.com/" },
  { name: "Delivery Hero", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFOZbu6XEJUAw/company-logo_200_200/company-logo_200_200/0/1688740737160/delivery_hero_se_logo?e=1735171200&v=beta&t=FSA_rpjJNMsq73Aha7tCdVVbSfqCbQ7saDJjTwoETzw", link: "https://careers.deliveryhero.com/deliveryhero-jobs" },
  { name: "MediaForce", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHxJy5tPgbY_A/company-logo_200_200/company-logo_200_200/0/1657023724978/media_force_ltd__logo?e=1735171200&v=beta&t=3siI4djodwyJbmqDGF35KTAjO36-hXX_u6kQajvBwI0", link: "https://mediaforce.com/careers/index.php" },
  { name: "Chatfuel", logo: "https://media.licdn.com/dms/image/v2/D560BAQG65BS0QlacLA/company-logo_200_200/company-logo_200_200/0/1691086025789/chatfuel_logo?e=1735171200&v=beta&t=4nK7imIeHLlvQ3n4a8t_DoSE-LtJ8B2oraPLM6fSabY", link: "https://chatfuel.breezy.hr/" },
  { name: "Spotify", logo: "https://media.licdn.com/dms/image/v2/C560BAQFkDzx_7dqq3A/company-logo_200_200/company-logo_200_200/0/1631377935713?e=1735171200&v=beta&t=iHDNlY0XXXyt6Dqz2B1i1cPfbrLNeFB3vUqDimqxrPU", link: "https://www.lifeatspotify.com/jobs" },
  { name: "Wheely", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFuefSFtPCNjw/company-logo_200_200/company-logo_200_200/0/1686217312019/wheely_logo?e=1735171200&v=beta&t=DZ_bEPW7esuEo5rBQWjW_h-nw-7hOUxUb7174kG0k-E", link: "https://wheely.com/en/careers" },
  { name: "McKinsey & Company", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHkZ4FKz0_SHQ/company-logo_200_200/company-logo_200_200/0/1719836610134/mckinsey_logo?e=1735171200&v=beta&t=YQV230zffoYYq0H2_q2iVwwoY96b9J1HJqL3jMFLaKA", link: "https://www.mckinsey.com/careers/search-jobs" },
  { name: "Sentium Consulting", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQErovPr67maiA/company-logo_200_200/company-logo_200_200/0/1705330667282/sentiumtech_logo?e=1735171200&v=beta&t=Dm-UNT6CIb104lh1KzfdZjJhlfxGP8X11jbFoB9P8s0", link: "https://www.linkedin.com/company/sentiumtech/?originalSubdomain=uk" },
  { name: "Zalando", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFr3zY0lxL0xA/company-logo_200_200/company-logo_200_200/0/1725959481841/zalando_logo?e=1735171200&v=beta&t=2HSYEOnAaQscz4jSeIKAjakyrdX87RMtdKywSrMKGgo", link: "https://jobs.zalando.com/en/jobs" },
  { name: "Mollie", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH1ABy2f4cF-A/company-logo_200_200/company-logo_200_200/0/1660833761046/molliepayments_logo?e=1735171200&v=beta&t=cyiQD_pOC4mbxCYW_6gJlRPsufERHc7SUZqXMqkClY0", link: "https://jobs.picnic.app/en/vacancies" },
  { name: "Check24", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGGDxO2gF2yCg/company-logo_200_200/company-logo_200_200/0/1630550743252/check24_vergleichsportal_gmbh_logo?e=1735171200&v=beta&t=TutLCUO-FaWnoHnmgvl8MvyQjWYXhWaLt-QTdSXT8aQ", link: "https://jobs.check24.de/en/" },
  { name: "adjoe", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFreRHW-tS7xg/company-logo_200_200/company-logo_200_200/0/1672987587523/adjoe_logo?e=1735171200&v=beta&t=rrgJj-mWUJ9njOo60aq1M62jMBEA5HHwJUbxskFzi2Q", link: "https://adjoe.io/company/careers/" },
  { name: "Amazon", logo: "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_200_200/company-logo_200_200/0/1630640869849/amazon_logo?e=1735171200&v=beta&t=JzMXBhhMdT8HpG14wu84OaFpKNzwihyPkBoZcCrkrG0", link: "https://www.amazon.jobs/en/" },
  { name: "EPAM", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQERhwCA4aBweA/company-logo_200_200/company-logo_200_200/0/1706845800358/epam_systems_logo?e=1735171200&v=beta&t=twEunS9ixq56299koQbVfEg_POIxJ8IqnZ1IrUWVC1g", link: "https://www.epam.com/careers" },
  { name: "Sixt", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHNgvylqUBH3Q/company-logo_200_200/company-logo_200_200/0/1683185753998/sixt_logo?e=1735171200&v=beta&t=FUHhOUGvwbnal02Yq6tXREeDrGZpltsJKU2EIFG1RyU", link: "https://www.sixt.jobs/us" },
  { name: "Tripleten", logo: "https://media.licdn.com/dms/image/v2/D560BAQHBeNK1AS9JsA/company-logo_200_200/company-logo_200_200/0/1687464456892?e=1735171200&v=beta&t=pIopSMtKK7FLviD3UY7SpOeewyc7dqeWLf_E-Dgxnm8", link: "https://www.comeet.com/jobs/tripleten/98.008" },
  { name: "Criteo", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFMB7iC1WROXQ/company-logo_200_200/company-logo_200_200/0/1726650227909/criteo_logo?e=1735171200&v=beta&t=cguGdQP_T2ZRnZcmI_pcAKVlfHbi7GOfES_WSPSgh7E", link: "https://careers.criteo.com/en/" },
  { name: "BostonGene", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHB0bhqcNVGwQ/company-logo_200_200/company-logo_200_200/0/1630654650344/bostongene_logo?e=1735171200&v=beta&t=gfshbyizjbhJmlDqPgzKPLGN3cb_6nc5TWE4WbfWTNQ", link: "https://bostongene.com/about-us/careers" },
  { name: "Glovo", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEwxdiNWB86IQ/company-logo_200_200/company-logo_200_200/0/1664287507138/glovo_app_logo?e=1735171200&v=beta&t=TwuPgy3fwITRDMdPNEoSVpt93F3nQvySGvziwYicKQ4", link: "https://jobs.glovoapp.com/" },
  { name: "Monite", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEfqL0LHWT8Ug/company-logo_200_200/company-logo_200_200/0/1682615295038/monitehq_logo?e=1735171200&v=beta&t=uLvbODR-CzGi0d9jVOcQG-IoT8pU1GkCQ_Vkmi7SpLw", link: "https://apply.workable.com/monite/" },
  { name: "OSCO", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFtm2C_zMMUQw/company-logo_200_200/company-logo_200_200/0/1631311257856?e=1735171200&v=beta&t=C6Sk1pm7IhAzyiic8PUUUBmmcVNHuoQOgv_AIfbmuLc", link: "https://oscoconstructiongroup.com/careers/" },
  { name: "Wix", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHTiqoaFoadyQ/company-logo_200_200/company-logo_200_200/0/1687355469486?e=1735171200&v=beta&t=nnY1K1VVgiMtpRh8lu6WgXzBKNR0O2kafim06DsMs8Q", link: "https://www.wix.com/jobs/locations/kyiv" },
  { name: "Bayer", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHSCcODLJZQug/company-logo_200_200/company-logo_200_200/0/1719842238235/bayer_logo?e=1735171200&v=beta&t=XJIZY5IH5RM0kvcbIhc5It1Er54unCMEB3uVLVxDnOA", link: "https://career.bayer.com/en/career" },
  { name: "Bolt", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQF654njw5CnGg/company-logo_200_200/company-logo_200_200/0/1725347936948/bolt_eu_logo?e=1735171200&v=beta&t=Sx0jmWnWKvBR8z8rWfJCXhlnFvru9-tmjPiez5cD598", link: "https://bolt.eu/en/careers/positions/" },
  { name: "Adapty.io", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEzz-9GQfzFfQ/company-logo_200_200/company-logo_200_200/0/1669023536416/adaptyio_logo?e=1735171200&v=beta&t=o_HGZQfCQ3ZhUjv93e7lyHXPv_J_9jdX4pRpKHcE5dU", link: "https://adapty.io/careers/" },
  { name: "BestSecret", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHL1LCX1vZ0Qg/company-logo_200_200/company-logo_200_200/0/1657005165894/bestsecret_logo?e=1735171200&v=beta&t=BbzBa03k_AUex-c7tWvT1-uYfIcQ7eu2XnoCdJBr3C8", link: "https://jobs.bestsecret.com/en/jobs.html" },
  { name: "AboutYou", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGpPtg5-nkTtQ/company-logo_200_200/company-logo_200_200/0/1718285686807/about_you_logo?e=1735171200&v=beta&t=u_MRettD6jhPFiRUrLuQ2McHYiAVzxKyPB5glDDj0gQ", link: "https://corporate.aboutyou.de/en/career" },
  { name: "Solaris SE", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHmIJx_HbdeJA/company-logo_200_200/company-logo_200_200/0/1630577071664/solarisbank_logo?e=1735171200&v=beta&t=1waM6hIdeeLdgJSVTu89fqnY0zrQpk1dTYaaQZbnZm0", link: "https://www.solarisgroup.com/en/careers/" },
  { name: "MOIA", logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGdckRVBku53g/company-logo_200_200/company-logo_200_200/0/1630625592718/moia_mobility_logo?e=1735171200&v=beta&t=dCYv7QXZdZRRmyJXtGSyMDsG5vaRTACdnk2_LdvVsMU", link: "https://www.moia.io/en/career/moia-operations-gmbh" },
  { name: "Volkswagen", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFB1WG81oe_XQ/company-logo_200_200/company-logo_200_200/0/1709205041953/volkswagen_group_logo?e=1735776000&v=beta&t=3ZxQI_txfAhJ9_Ky1TJhZb-I3mI0eDW8nXtGbaiQX_4", link: "https://www.volkswagen-group.com/en/careers-with-the-group-16105" },
  { name: "Mellifera", logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHvxkhRNaVTuw/company-logo_200_200/company-logo_200_200/0/1692354275853/mellifera_operations_limited_logo?e=1735776000&v=beta&t=eLEUZpZNpu_KsGbdPdtTd-2XlzHCbR9GR0aVDcLAHXE", link: "https://mellifera.team/careers/" }
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
                Introduce yourself, briefly share your experience, mention where you found their contact, and attach your CV in "CV_lastname_firstname" format.
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