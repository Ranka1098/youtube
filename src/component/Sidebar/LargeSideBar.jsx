import { FaAngleRight } from "react-icons/fa6";
import {
  exploreItems,
  menuItems,
  moreFromYoutubeItems,
  settingsItems,
  youItems,
} from "../../utils/data";

const LargeSideBar = () => {
  return (
    <div className="w-[13rem] flex  flex-col gap-3 p-2 overflow-x-hidden overflow-y-scroll h-[90vh] left-0 z-10">
      {menuItems.map((item) => (
        <button key={item.id} className="flex   gap-3">
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
      <hr />
      {/* ------------------------------------------- */}
      <p className="flex gap-1 items-center text-md">
        {" "}
        You
        <span>
          <FaAngleRight size={15} />
        </span>
      </p>
      {youItems.map((item) => (
        <button key={item.id} className="flex   gap-3">
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
      <hr />
      {/* ----------------------------------------- */}
      <p className="font-semibold">Subscription</p>
      <hr />
      {/* ----------------------------------------- */}
      <p className="font-semibold">Explore</p>
      {exploreItems.map((item) => (
        <button key={item.id} className="flex   gap-3">
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
      <hr />
      {/* --------------------------------------------------- */}
      <p className="font-semibold">More From Youtube</p>
      {moreFromYoutubeItems.map((item) => (
        <button key={item.id} className="flex   gap-3">
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
      <hr />
      {/* ---------------------------------------- */}
      {settingsItems.map((item) => (
        <button key={item.id} className="flex   gap-3">
          {item.icon}
          <p>{item.label}</p>
        </button>
      ))}
      <hr />
      {/* ----------------------------------- */}
      <p>AboutPressCopyrightContact usCreatorsAdvertiseDevelopers</p>
      <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
      <hr />
      {/* -------------------------------------------------- */}
      <p>© 2024 Google LLC</p>
    </div>
  );
};

export default LargeSideBar;
