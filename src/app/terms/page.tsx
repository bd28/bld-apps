import { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Terms of Service | BLD Apps",
  description: "BLD Apps terms of service and conditions of use.",
};

export default function TermsOfServicePage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                These terms and conditions outline the rules and regulations for the use of BLD Apps's website.
                By accessing this website, we assume you accept these terms and conditions in full. Do not
                continue to use BLD Apps's website if you do not accept all of the terms and conditions stated on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, BLD Apps and/or its licensors own the intellectual property rights
                for all material on BLD Apps. All intellectual property rights are reserved. You may view
                and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
              <p className="mt-4">You must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Republish material from this website</li>
                <li>Sell, rent or sub-license material from this website</li>
                <li>Reproduce, duplicate or copy material from this website</li>
                <li>Redistribute content from BLD Apps (unless content is specifically made for redistribution)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Comments</h2>
              <p>
                Certain parts of this website offer the opportunity for users to post and exchange opinions,
                information, material and data. BLD Apps does not screen, edit, publish or review Comments
                prior to their appearance on the website and Comments do not reflect the views or opinions of
                BLD Apps, its agents or affiliates. Comments reflect the view and opinion of the person who
                posts such view or opinion.
              </p>
              <p className="mt-4">
                BLD Apps reserves the right to monitor all Comments and to remove any Comments which it considers
                in its absolute discretion to be inappropriate, offensive or otherwise in breach of these Terms and Conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Hyperlinking to our Content</h2>
              <p>
                The following organizations may link to our website without prior written approval:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors when they list us in the directory may link to our website in the same manner as they hyperlink to the websites of other listed businesses</li>
              </ul>
              <p className="mt-4">
                These organizations may link to our home page, to publications or to other website information
                so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship,
                endorsement or approval of the linking party and its products or services; and (c) fits within
                the context of the linking party's site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties
                and conditions relating to our website and the use of this website (including, without limitation,
                any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the
                use of reasonable care and skill).
              </p>
              <p className="mt-4">
                Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
                <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> info@bldapps.com
              </p>
              <p>
                <strong>Phone:</strong> (832) 590-0729
              </p>
              <p>
                <strong>Address:</strong> 14450 John F Kennedy Blvd, Houston, TX 77032
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 