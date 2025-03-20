import { useEffect } from "react";

const Botchat: React.FC = () => {
  useEffect(() => {
    (function () {
      (window as any).VG_CONFIG = {
        ID: "U7Z1yk7LKrfGG9L",
        region: "eu", // 'eu' or 'na' corresponding to Europe and North America
        render: "full-width", // popup or full-width
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ],
        // userID: 'USER_ID', // If you want to use your own user_id
        // autostart: true, // Whether to autostart the chatbot with the proactive message
      };
      const VG_SCRIPT = document.createElement("script");
      VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      VG_SCRIPT.defer = true; // Remove 'defer' if you want widget to load faster (Will affect website loading)
      document.body.appendChild(VG_SCRIPT);
    })();
  }, []);

  return (
    <div
      className="w-full max-w-[650px] h-[500px] sm:h-[600px] md:h-[650px] rounded-2xl  text-sm"
      id="VG_OVERLAY_CONTAINER"
    ></div>
  );
};

export default Botchat;
