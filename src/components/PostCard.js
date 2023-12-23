import axios from "axios";

function PostCard(props) {
  return (
    <div
      onClick={async () => {
        props.setShowAdditionalContent();
        await axios
          .get("https://jsonplaceholder.typicode.com/comments?postId=1")
          .then((res) => {
            props.setResult(res.data);
          });
      }}
      className="cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-8 my-[22px]">
          <div className="relative">
            <div
              className={`flex items-center justify-center rounded-full min-w-[34px] h-[34px] bg-[#E0E0E0]`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1755 5.02924C12.3969 5.02924 10.1463 7.27982 10.1463 10.0585C10.1463 12.8371 12.3969 15.0877 15.1755 15.0877C17.9542 15.0877 20.2048 12.8371 20.2048 10.0585C20.2048 7.27982 17.9542 5.02924 15.1755 5.02924ZM17.6901 10.0585C17.6901 8.67546 16.5585 7.54388 15.1755 7.54388C13.7924 7.54388 12.6609 8.67546 12.6609 10.0585C12.6609 11.4415 13.7924 12.5731 15.1755 12.5731C16.5585 12.5731 17.6901 11.4415 17.6901 10.0585ZM22.7193 22.6316C22.4678 21.7389 18.5702 20.117 15.1754 20.117C11.7933 20.117 7.92076 21.7263 7.63158 22.6316H22.7193ZM5.117 22.6316C5.117 19.2871 11.8185 17.6023 15.1755 17.6023C18.5325 17.6023 25.234 19.2871 25.234 22.6316V25.1462H5.117V22.6316Z"
                  fill="#0000008A"
                />
              </svg>
            </div>
            <div
              className={`absolute left-4 top-0 flex items-center justify-center rounded-full min-w-[34px] h-[34px] bg-[#2F80ED]`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1755 5.02924C12.3969 5.02924 10.1463 7.27982 10.1463 10.0585C10.1463 12.8371 12.3969 15.0877 15.1755 15.0877C17.9542 15.0877 20.2048 12.8371 20.2048 10.0585C20.2048 7.27982 17.9542 5.02924 15.1755 5.02924ZM17.6901 10.0585C17.6901 8.67546 16.5585 7.54388 15.1755 7.54388C13.7924 7.54388 12.6609 8.67546 12.6609 10.0585C12.6609 11.4415 13.7924 12.5731 15.1755 12.5731C16.5585 12.5731 17.6901 11.4415 17.6901 10.0585ZM22.7193 22.6316C22.4678 21.7389 18.5702 20.117 15.1754 20.117C11.7933 20.117 7.92076 21.7263 7.63158 22.6316H22.7193ZM5.117 22.6316C5.117 19.2871 11.8185 17.6023 15.1755 17.6023C18.5325 17.6023 25.234 19.2871 25.234 22.6316V25.1462H5.117V22.6316Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col text-start">
            <div className="flex">
              <p className={`text-[#2F80ED] text-large font-bold`}>
                {props.index.title}
              </p>
              <p
                className={`ml-5 min-w-max text-[#4F4F4F] text-medium font-normal`}
              >
                {props.index.date}
              </p>
            </div>

            <div>
              {props.index.name !== "" && (
                <p className={`text-[#4F4F4F] text-medium font-bold`}>
                  {props.index.name} :
                </p>
              )}

              <p className={`text-[#4F4F4F] text-medium font-normal`}>
                {props.index.body}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-max pl-5">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
              fill={props.i + 1 !== props.postLength ? "#EB5757" : "#FFFFFF"}
            />
          </svg>
        </div>
      </div>
      {props.i + 1 !== props.postLength ? <hr></hr> : null}
    </div>
  );
}

export default PostCard;
