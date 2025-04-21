import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <div className="container mx-auto py-14 ">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 ">
            <p className="text-2xl text-white mb-14">
              Ready to make a digital impact?
              <br />
              Let’s create something unforgettable.
            </p>
            <span className="border-b text-white border-white pb-3 text-nowrap flex w-fit gap-3 text-2xl items-center">
              hello@100xelevate.com{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.53 11.4699C21.6705 11.6106 21.7494 11.8012 21.7494 11.9999C21.7494 12.1987 21.6705 12.3893 21.53 12.5299L14.543 19.5299C14.4739 19.6016 14.3912 19.6588 14.2997 19.6981C14.2082 19.7375 14.1098 19.7582 14.0102 19.7591C13.9106 19.76 13.8119 19.7411 13.7197 19.7034C13.6275 19.6658 13.5437 19.6101 13.4733 19.5397C13.4028 19.4694 13.3471 19.3856 13.3093 19.2935C13.2716 19.2013 13.2525 19.1026 13.2534 19.003C13.2542 18.9034 13.2748 18.805 13.3141 18.7135C13.3534 18.6219 13.4105 18.5392 13.482 18.4699L19.19 12.7509L3.00005 12.7619C2.80114 12.7622 2.61027 12.6834 2.46943 12.543C2.32859 12.4025 2.24931 12.2119 2.24905 12.0129C2.24878 11.814 2.32755 11.6232 2.46801 11.4823C2.60848 11.3415 2.79914 11.2622 2.99805 11.2619L19.192 11.2519L13.481 5.52994C13.4095 5.46072 13.3524 5.37794 13.3131 5.28641C13.2738 5.19489 13.2532 5.09647 13.2524 4.99688C13.2515 4.8973 13.2706 4.79855 13.3083 4.70639C13.3461 4.61424 13.4018 4.53053 13.4723 4.46014C13.5427 4.38976 13.6265 4.33411 13.7187 4.29644C13.8109 4.25877 13.9096 4.23984 14.0092 4.24075C14.1088 4.24167 14.2072 4.2624 14.2987 4.30175C14.3902 4.3411 14.4729 4.39827 14.542 4.46994L21.53 11.4699Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text-white">
            <h4 className="text-sm mb-6">(Navigaton)</h4>
            <div>
              <a href="#" className="text-white block text-2xl">
                Home
              </a>
              <a href="#" className="text-white block text-2xl">
                Work
              </a>
              <a href="#" className="text-white block text-2xl">
                Services
              </a>
              <a href="#" className="text-white block text-2xl">
                About
              </a>
              <a href="#" className="text-white block text-2xl">
                Insights
              </a>
              <a href="#" className="text-white block text-2xl">
                ROI Calculator
              </a>
              <a href="#" className="text-white block text-2xl">
                Instant Checkout
              </a>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-sm mb-6">(Legal)</h4>
            <div>
              <a href="#" className="text-white block text-2xl">
                Privacy Policy
              </a>
              <a href="#" className="text-white block text-2xl">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white border-t ">
        <div className="container grid grid-cols-2 py-4">
          <div className="flex items-center ">
            <h5 className="text-sm mb-3">All rights reserved 100xelevate 2025</h5>
          </div>
          <div className="flex items-center justify-end">
            <h5 className="text-sm mr-3">Back to top</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.47 0.469828C7.61063 0.329378 7.80125 0.250488 8 0.250488C8.19875 0.250488 8.38938 0.329378 8.53 0.469828L15.53 7.45683C15.6017 7.52598 15.6588 7.60871 15.6982 7.7002C15.7375 7.79168 15.7583 7.89009 15.7592 7.98967C15.7601 8.08925 15.7412 8.18802 15.7035 8.28021C15.6658 8.3724 15.6102 8.45616 15.5398 8.52662C15.4694 8.59707 15.3857 8.6528 15.2935 8.69055C15.2014 8.72831 15.1026 8.74733 15.0031 8.74651C14.9035 8.74569 14.805 8.72505 14.7135 8.68579C14.622 8.64652 14.5392 8.58943 14.47 8.51783L8.751 2.80983L8.762 18.9998C8.76227 19.1987 8.6835 19.3896 8.54304 19.5305C8.40257 19.6713 8.21191 19.7506 8.013 19.7508C7.81409 19.7511 7.62322 19.6723 7.48238 19.5319C7.34154 19.3914 7.26227 19.2007 7.262 19.0018L7.252 2.80783L1.53 8.51883C1.46078 8.59043 1.378 8.64752 1.28648 8.68679C1.19495 8.72605 1.09653 8.74669 0.996945 8.74751C0.89736 8.74833 0.79861 8.72931 0.706456 8.69155C0.614302 8.6538 0.53059 8.59807 0.460204 8.52762C0.389818 8.45716 0.334167 8.3734 0.2965 8.28121C0.258833 8.18902 0.239903 8.09025 0.240815 7.99067C0.241727 7.89108 0.262463 7.79268 0.301812 7.7012C0.341161 7.60971 0.398336 7.52698 0.470001 7.45783L7.47 0.469828Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
