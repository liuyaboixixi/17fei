import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import LotteryIsland from "../islands/lottery.tsx";

export default function LotteryPage(props: PageProps) {
  return (
    <>
      <Head>
        <title>抽奖 - 17fei</title>
        <meta name="description" content="幸运数字抽取任务" />
        <link rel="stylesheet" href="/lottery.css" />
      </Head>
      <div class="lottery-container">
        <LotteryIsland />
      </div>
    </>
  );
}

