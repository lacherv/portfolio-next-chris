import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col  items-center gap-4 justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your projects, imporving your online
          presence, or helping with your website design and convertong
          challenges.
        </p>
        <a href="mailto:awelakoue@gmail.com">
          <button
            className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg
        hover:from-indigo-950 hover:to-blue-600 duration-300"
          >
            Say Hello!
          </button>
        </a>
      </div>
      <div className="mt-8 flex items-center gap-8 justify-center flex-wrap">
        <SocialLinks title="Github" link="https://github.com/lacherv" />
        <SocialLinks title="LinkedIn" link="https://www.linkedin.com/in/christian-awelakoue" />
        <SocialLinks title="Twitter" link="https://twitter.com/lacherv" />
        <SocialLinks title="Gitlab" link="https://gitlab.com/lacherv" />
      </div>
    </div>
  );
};

export default Contact;
