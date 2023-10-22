import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    // <footer className="border-t bg-white">
    //   <div className="mx-auto py-10">
    //     <p className="text-center text-xs text-black">
    //       &copy; 2023 Store, Inc. All rights reserved.
    //     </p>
    //     <p className="text-center text-sm text-black">
    //       Created by ioannis @2023
    //     </p>
    //   </div>
    // </footer>
    <footer className="text-black-100 mt-5 flex flex-col border-t border-gray-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-start justify-start gap-6">
          STORE LOGO
          <p className="text-base">
            STORE 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16">
        <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
          <p className="mr-3">Created by ioannis @2023</p>
        </Link>
        <p className="mr-3">Created by ioannis @2023</p>
        <p> All Rights Reserved.</p>

        <div className="footer__copyrights-link">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms Of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
