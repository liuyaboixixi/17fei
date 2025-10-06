import { Head } from "$fresh/runtime.ts";
import Footer from '../components/Footer.tsx'
import TaskAssembleIsland from '../islands/task-assemble.tsx'

export default function TaskAssemble() {
  return (
    <>
      <Head>
        <link href="/card.css" rel="stylesheet"></link>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/howler.min.js"></script>
        <title>任务组装游戏</title>
      </Head>
      <div class="w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
        <div class="max-w-screen-md mx-auto">
          <div class="p-2 flex items-center w-full">
            <a class="flex-1" href="/">
              <img src="/logo.png" class="w-12 h-12" />
            </a>
            <div class="flex-auto text-center">
              <span class="text-2xl font-bold">任务组装</span>
            </div>
            <div class="flex-1 text-right">
              <a class="p-2 bg-pink-600 border text-sm whitespace-nobreak rounded" href="/">返回首页</a>
            </div>
          </div>
          
          <TaskAssembleIsland />
        </div>
      </div>
    </>
  )
}

