
import HeroSection from "@/components/HeroSection";
import { Separator } from "@/components/ui/separator";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Cookies Policy"
        subtitle="How we use cookies and similar technologies"
        backgroundImage="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="container max-w-4xl mx-auto py-16 px-4">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p>
            When you use and access our website, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Essential cookies</strong>: These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
            <li><strong>Functionality cookies</strong>: These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.</li>
            <li><strong>Analytics cookies</strong>: These cookies collect information about how visitors use a website, for instance which pages visitors go to most often. We use this information to improve our website and provide a better user experience.</li>
            <li><strong>Marketing cookies</strong>: These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. What Are Your Choices Regarding Cookies</h2>
          <p>
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Where Can You Find More Information About Cookies</h2>
          <p>
            You can learn more about cookies and the following third-party websites:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>AllAboutCookies: <a href="https://www.allaboutcookies.org/" className="text-purple-600 hover:text-purple-800">https://www.allaboutcookies.org/</a></li>
            <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/" className="text-purple-600 hover:text-purple-800">https://www.networkadvertising.org/</a></li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Our Cookies Policy</h2>
          <p>
            We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page. You are advised to review this Cookies Policy periodically for any changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our Cookies Policy, please contact us:
          </p>
          <p className="mt-2">
            <strong>Email</strong>: privacy@shoob.com<br />
            <strong>Phone</strong>: +1 (555) 123-4567<br />
            <strong>Address</strong>: 123 Creativity Avenue, Suite 100, Design District, CA 90210
          </p>
          
          <Separator className="my-10" />
          
          <p className="text-sm text-muted-foreground">
            This cookies policy is provided as a general guideline. For legal advice concerning your specific situation, please consult with a qualified attorney.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
