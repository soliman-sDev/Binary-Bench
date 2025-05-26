import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="absolute w-full -bottom-0">
      <div className="bg-[#CECFC9] dark:bg-[#1B263B]">
        <div className="container mx-auto py-4 px-12 flex items-center justify-between flex-row">
          <p className="text-gray-900 dark:text-gray-50 font-medium text-sm text-center sm:text-left">
            © {year}
            <a
              href="https://soliman.vercel.app/"
              rel="noopener noreferrer"
              className="text-gray-900 font-medium dark:text-gray-50 ml-1"
              target="_blank"
            >
              Soliman Soliman
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="ml-4 text-gray-900 dark:text-gray-50"
              href="https://github.com/soliman-sDev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub  className="size-5"/>
            </a>
            <a
              className="ml-4 text-gray-900 dark:text-gray-50"
              href="https://www.linkedin.com/in/soliman-sdev"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="size-5"/>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;