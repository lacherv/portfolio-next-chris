import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          King delivered his prayer for our country. This has bred more fear and
          mistrust. Hamas does have support among some Palestinians, but they
          also have responsibilities. I know that for many, the face of
          globalization is contradictory.It is a war I am proud I opposed from the
          start - a war that should never have been authorized and never been
          waged. It was innovation in Muslim communities that developed the
          order of algebra; our magnetic compass and tools of navigation; our
          mastery of pens and printing; our understanding of how disease spreads
          and how it can be healed. This same story can be told by people from
          South Africa to South Asia; from Eastern Europe to Indonesia. Indeed,
          faith should bring us together.
        </p>
        <p>
          And just as Lieutenant Kerry did not hesitate to risk his life to
          protect the men who served with him in Vietnam, President Kerry will
          not hesitate one moment to use our military might to keep America safe
          and secure. The challenges we face require tough choices, and
          Democrats as well as Republicans will need to cast off the worn-out
          ideas and politics of the past. Their actions are irreconcilable with
          the rights of human beings, the progress of nations, and with Islam.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
