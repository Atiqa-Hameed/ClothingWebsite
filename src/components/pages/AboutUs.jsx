import Footer from "../Footer";
import Header from "../Header";
import NewsletterSection from "../NewsletterSection";
import OurTeamSection from "../OurTeamSection";

const AboutUs = () => {
  return (
    <div>
      <Header backgroundColor="white" />
      <section className="flex flex-col lg:flex-row items-center justify-center  lg:space-x-32 pt-32">
        {/* Left Side: Text */}
        <div className="lg:w-1/3 max-w-md mb-6 lg:mb-0 lg:mr-6">
          {" "}
          {/* Add right margin to create space */}
          <h2 className="text-3xl font-bold mb-6 text-customGreen">
            About <span className="text-customGreen font-light">Us</span>
          </h2>
          <p className="text-gray-700 mb-4 text-justify font-sans">
            Welcome to Logo – your ultimate destination for cool and trendy
            fashion! At Logo, we are dedicated to providing the latest styles
            that resonate with the vibrant and dynamic spirit of today's youth.
            Our collection is carefully curated to ensure that every piece
            embodies the cutting-edge trends and timeless coolness that define
            your unique style.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/3">
          <img
            src="/src/assets/7.png" 
            alt="About Us"
            className="w-[400px] md:w-[500px] lg:w-full h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
          />
        </div>
      </section>

      <div className="w-full lg:h-[475px] h-auto flex flex-col items-center bg-gray-100 mt-32 gap-12">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mt-12 text-customGreen">
          Our Mission
        </h2>

        <div className="flex lg:flex-row flex-col w-full h-full items-center  gap-12">
          {/* Left Side: Image */}
          <div className="relative h-full flex items-end justify-start">
            <img
              src="/src/assets/a.png" // Replace with your image URL
              alt="Descriptive Alt Text"
              className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-cover"
            />
          </div>

          {/* Right Side: Text */}
          <div className="lg:w-2/4 w-3/4 p-4 text-justify font-sans lg:leading-loose">
            <p>
              Our mission is simple: to inspire and empower youngsters to
              express themselves through fashion. Whether you're looking for the
              perfect outfit for a night out, a casual day at school, or
              anything in between, Logo has you covered. We believe in fashion
              as a form of self-expression, and our diverse range of clothing is
              designed to cater to every mood and moment.
            </p>
          </div>
        </div>
      </div>
      <OurTeamSection />
      <NewsletterSection />

      <Footer />
    </div>
  );
};

export default AboutUs;
