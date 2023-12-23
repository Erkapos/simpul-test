import { useState } from "react";

function ChatBubble(props) {
  const [showEdit, setShowEdit] = useState(false);
  const currentUserId = 2;

  return props.each.id == currentUserId ? (
    <div
      key={props.id}
      onClick={() => {
        if (showEdit) {
          setShowEdit(false);
        }
        return (
          <div
            className={`border cursor-pointer border-[#4F4F4F] bg-white absolute rounded-md w-[126px]`}
          >
            <p className={`px-4 py-2 text-[#2F80ED]`}>Edit</p>
            <hr></hr>
            <p className={`px-4 py-2 text-[#EB5757]`}>Delete</p>
          </div>
        );
      }}
    >
      {props.id === 0 ? (
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px bg-[#EB5757] border-0" />
          <span class="font-medium w-[100%] text-[#EB5757] bg-white ">
            New Message
          </span>
          <hr class="w-full h-px bg-[#EB5757] border-0" />
        </div>
      ) : props.id === 4 ? (
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px bg-[#4F4F4F] border-0" />
          <span class="font-medium w-[100%] text-[#4F4F4F] bg-white ">
            Today, June 09 2021
          </span>
          <hr class="w-full h-px bg-[#4F4F4F] border-0" />
        </div>
      ) : null}

      <div className="py-2 flex flex-col justify-end">
        <p className={`text-end font-bold text-[#9B51E0]`}>You</p>
        <div className={`text-start gap-2 flex justify-end`}>
          <div className="relative">
            <svg
              onClick={() => {
                setShowEdit(true);
              }}
              className="cursor-pointer"
              width="22"
              height="22"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
                fill="#4F4F4F"
              />
            </svg>

            {showEdit && (
              <div
                className={`border border-[#4F4F4F] absolute top-6 bg-white rounded-md w-[126px]`}
              >
                <p className={`px-4 py-2 text-[#2F80ED]`}>Edit</p>
                <hr></hr>
                <p className={`px-4 py-2 text-[#EB5757]`}>Delete</p>
              </div>
            )}
          </div>
          <div className={`max-w-md p-2 rounded-md bg-[#EEDCFF]`}>
            <p className="pb-2">{props.each.body}</p>
            <p>19:32</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={props.id}
      onClick={() => {
        if (showEdit) {
          setShowEdit(false);
        }
      }}
    >
      {props.id === 0 ? (
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px bg-red-500 border-0" />
          <span class="font-medium w-[100%] text-red-500 bg-white ">
            New Message
          </span>
          <hr class="w-full h-px bg-red-500 border-0" />
        </div>
      ) : props.id === 2 ? (
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px bg-black border-0" />
          <span class="font-medium w-[100%] text-black bg-white ">
            Today, June 09 2021
          </span>
          <hr class="w-full h-px bg-black border-0" />
        </div>
      ) : null}
      <div className="py-2">
        <p
          className={`text-start ${
            props.each.id % 2 === 0 ? "text-[#E5A443]" : "text-[#43848D]"
          }`}
        >
          {props.each.name}
        </p>
        <div className="flex justify-start text-start gap-2">
          <div
            className={`max-w-md ${
              props.each.id % 2 === 0 ? "bg-[#FCEED3]" : "bg-[#D2F2EA]"
            } p-2 rounded-md`}
          >
            <p className="pb-2">{props.each.body}</p>
            <p>19:32</p>
          </div>
          <div className="relative">
            <svg
              width="22"
              height="22"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setShowEdit(true);
              }}
              className="cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.73685 12.5731C6.35381 12.5731 5.22223 13.7046 5.22223 15.0877C5.22223 16.4707 6.35381 17.6023 7.73685 17.6023C9.11989 17.6023 10.2515 16.4707 10.2515 15.0877C10.2515 13.7046 9.11989 12.5731 7.73685 12.5731ZM22.8246 12.5731C21.4415 12.5731 20.3099 13.7046 20.3099 15.0877C20.3099 16.4707 21.4415 17.6023 22.8246 17.6023C24.2076 17.6023 25.3392 16.4707 25.3392 15.0877C25.3392 13.7046 24.2076 12.5731 22.8246 12.5731ZM12.7661 15.0877C12.7661 13.7046 13.8977 12.5731 15.2807 12.5731C16.6637 12.5731 17.7953 13.7046 17.7953 15.0877C17.7953 16.4707 16.6637 17.6023 15.2807 17.6023C13.8977 17.6023 12.7661 16.4707 12.7661 15.0877Z"
                fill="#4F4F4F"
              />
            </svg>

            {showEdit && (
              <div
                className={`border cursor-pointer border-[#4F4F4F] bg-white absolute top-6 rounded-md w-[126px]`}
              >
                <p className={`px-4 py-2 text-[#2F80ED]`}>Edit</p>
                <hr></hr>
                <p className={`px-4 py-2 text-[#EB5757]`}>Delete</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
