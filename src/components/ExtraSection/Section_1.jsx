const Section_1 = () => {
  return (
    <div className=" my-16 bg-sky-100">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
                What is EcoFy?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  An alternative product information system is a platform that
                  helps users discover alternative products to those they are
                  currently using. It provides information and recommendations
                  on alternative brands or options that may better suit their
                  needs.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
                How can I benefit from using a EcoFy?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  By using our platform, you can explore a wide range of
                  alternative products tailored to your preferences and
                  requirements. Whether you are looking for
                  environmentally-friendly options, better quality alternatives,
                  or more affordable choices, our system helps you make informed
                  decisions.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
                Is my personal information safe on this website?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We take privacy and security seriously. Your personal
                  information, such as your name and email address, is stored
                  securely in our database and is not shared with third parties
                  without your consent. We use encryption and other security
                  measures to protect your data from unauthorized access.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
                Are the recommendations on this website unbiased?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  We strive to provide unbiased recommendations based on user
                  experiences and feedback. Our platform relies on
                  user-generated content, and we do not endorse any specific
                  brands or products. We encourage users to share their honest
                  opinions and experiences to help others make informed
                  decisions.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 font-bold outline-none cursor-pointer focus:underline">
                How can I contact customer support if I have further questions
                or issues?
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                  If you have any further questions or encounter any issues
                  while using our website, please do not hesitate to contact our
                  customer support team. You can reach us via email, phone, or
                  through the contact form on our website. Our dedicated support
                  team is here to assist you and address any concerns you may
                  have.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_1;
