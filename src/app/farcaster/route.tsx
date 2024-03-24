import { createFrames, Button } from 'frames.js/next';
// import { Button } from "@/components/ui/button"

const frames = createFrames();
const handleRequest = frames(async (ctx) => {
  return {
    image: (
      <span>
        {ctx.pressedButton
          ? `I clicked ${ctx.searchParams.value}`
          : `Click some button`}
      </span>
    ),
    buttons: [
      <Button key="yes" action="post" target={{ query: { value: 'Yes' } }}>
        Say Yes
      </Button>,
      <Button key="no" action="post" target={{ query: { value: 'No' } }}>
        Say No
      </Button>,
    ],
  };
});
