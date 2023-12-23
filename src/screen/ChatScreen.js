import ChatBubble from "../components/ChatBubble";
import scrollIntoView from "scroll-into-view-if-needed";
import { useInView } from "react-intersection-observer";

function ChatScreen(props) {
  const [ref, inView] = useInView();
  const node = document.getElementById("bottomChat");

  return (
    <div className="rounded-md flex flex-col justify-between h-[100%] px-6 py-3 bg-white">
      <div>
        <div className="flex justify-between items-center text-start gap-5">
          <svg
            onClick={() => {
              props.setFunction();
            }}
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M25.9883 13.8304H10.6868L17.7152 6.80204L15.9298 5.02924L5.87134 15.0877L15.9298 25.1462L17.7026 23.3734L10.6868 16.345H25.9883V13.8304Z"
              fill="#333333"
            />
          </svg>
          <div className="w-full">
            <p className={`text-[#2F80ED] text-large font-bold`}>
              {props.title}
            </p>
            <p className={`w-full text-[#333333] text-medium font-normal`}>
              3 participant
            </p>
          </div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z"
              fill="#333333"
            />
          </svg>
        </div>

        <hr></hr>
      </div>

      <div className="h-[575px] overflow-auto flex flex-col-reverse">
        <div id="bottomChat" className="w-[1px] h-[1px]" ref={ref}></div>
        {props.result.length !== 0 &&
          props.result.map((each, i) => {
            return <ChatBubble key={i} id={i} each={each} />;
          })}
      </div>

      <div className="w-full flex flex-col relative justify-center items-center">
        {props.support ? (
          <p className="text-start absolute -top-8 rounded-md px-4 py-2 bg-blue-400 text-black w-full">
            <svg
              aria-hidden="true"
              class="inline w-6 h-6 text-gray-200 animate-spin dark:text-[#E0E0E0] fill-[#828282] mr-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Please wait while we connect you with one of our team ...
          </p>
        ) : (
          !inView && (
            <p
              onClick={() => {
                scrollIntoView(node, {
                  scrollMode: "always",
                  block: "nearest",
                  inline: "nearest",
                });
              }}
              className="text-center cursor-pointer absolute -top-8 rounded-md max-w-max flex justify-center px-4 py-2 bg-[#E9F3FF] text-[#2F80ED]"
            >
              New Message
            </p>
          )
        )}
        <div className="flex gap-5 py-5 w-full bg-white text-center justify-between">
          <input
            placeholder="Type a new message"
            className="border border-[#828282] rounded-md px-4 py-2 w-full text-start"
          ></input>
          <button
            className={`px-4 py-2 text-white font-bold bg-[#2F80ED] rounded-md`}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
