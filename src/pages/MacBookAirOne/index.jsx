import React from "react";

import { Text, Line, Button } from "components";

const MacBookAirOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex items-center justify-start mx-auto p-[67px] md:px-10 sm:px-5 w-full">
        <div className="bg-white_A700 flex flex-col gap-[47px] items-center justify-start mb-[397px] md:px-5 px-[100px] py-[50px] rounded-[25px] self-stretch shadow-bs w-auto sm:w-full">
          <Text
            className="font-hiraginomarugothicpro md:inline md:justify-center md:m-5 md:no-underline md:pl-[] text-center text-deep_purple_900 w-auto"
            as="h1"
            variant="h1"
          >
            talk to me, goose.
          </Text>
          <Line className="bg-deep_purple_900 h-0.5 w-[29%]" />
          <Button className="bg-light_green_800 cursor-pointer font-inknutantiqua font-normal h-[51px] leading-[normal] not-italic md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[25px] text-center text-white_A700 text-xs w-[228px]">
            then, click this shit
          </Button>
        </div>
      </div>
    </>
  );
};

export default MacBookAirOnePage;
