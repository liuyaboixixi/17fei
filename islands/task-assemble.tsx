import { useSignal } from "@preact/signals";
import { taskLevels, getRandomTasks, type TaskLevel } from "../lib/task-assemble.ts";

export default function TaskAssembleIsland() {
  const selectedLevel = useSignal<string>("level1");
  const assembledTasks = useSignal<string[]>([]);
  const showTasks = useSignal<boolean>(false);
  const taskCount = useSignal<number>(3);

  const handleLevelChange = (levelId: string) => {
    selectedLevel.value = levelId;
    showTasks.value = false;
    assembledTasks.value = [];
  };

  const assembleTasks = () => {
    const tasks = getRandomTasks(selectedLevel.value, taskCount.value);
    assembledTasks.value = tasks;
    showTasks.value = true;
    
    // 播放音效
    if (typeof window !== 'undefined') {
      new (window as any).Howl({
        src: '/Gold2.wav',
        format: ["mp3"],
        autoplay: true,
        onload: function() {
          (window as any).voice = null;
        },
      });
    }
  };

  const resetTasks = () => {
    showTasks.value = false;
    assembledTasks.value = [];
  };

  const getLevelName = (levelId: string) => {
    const level = taskLevels.find(l => l.id === levelId);
    return level ? level.name : "未知等级";
  };

  return (
    <div class="p-4">
      {/* 等级选择 */}
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-4 text-center">选择任务等级</h3>
        <div class="grid grid-cols-2 gap-3">
          {taskLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleLevelChange(level.id)}
              class={`p-3 rounded-lg border-2 transition-all ${
                selectedLevel.value === level.id
                  ? 'bg-pink-600 border-pink-300 text-white'
                  : 'bg-pink-500 border-pink-400 text-pink-100 hover:bg-pink-600'
              }`}
            >
              <div class="font-bold">{level.name}</div>
              <div class="text-sm opacity-80">{level.description}</div>
              <div class="text-xs mt-1">难度: {level.difficulty}/9</div>
            </button>
          ))}
        </div>
      </div>

      {/* 任务数量选择 */}
      <div class="mb-6">
        <h3 class="text-xl font-bold mb-4 text-center">选择任务数量</h3>
        <div class="flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((count) => (
            <button
              key={count}
              onClick={() => taskCount.value = count}
              class={`w-12 h-12 rounded-full border-2 transition-all ${
                taskCount.value === count
                  ? 'bg-pink-600 border-pink-300 text-white'
                  : 'bg-pink-500 border-pink-400 text-pink-100 hover:bg-pink-600'
              }`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      {/* 组装按钮 */}
      <div class="text-center mb-6">
        <button
          onClick={assembleTasks}
          class="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-xl rounded-lg shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105"
        >
          🎲 组装任务
        </button>
      </div>

      {/* 任务展示区域 */}
      {showTasks.value && (
        <div class="space-y-4">
          <div class="text-center mb-4">
            <h3 class="text-2xl font-bold text-white">
              {getLevelName(selectedLevel.value)} - 组装任务
            </h3>
            <p class="text-pink-200">共 {assembledTasks.value.length} 个任务</p>
          </div>

          <div class="space-y-3">
            {assembledTasks.value.map((task, index) => (
              <div
                key={index}
                class="bg-gradient-to-r from-pink-500 to-pink-600 p-4 rounded-lg shadow-lg border border-pink-300"
              >
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {index + 1}
                  </div>
                  <div class="text-white font-medium text-lg">
                    {task}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="text-center mt-6">
            <button
              onClick={resetTasks}
              class="px-6 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-800 transition-all"
            >
              🔄 重新组装
            </button>
          </div>
        </div>
      )}

      {/* 游戏说明 */}
      <div class="mt-8 p-4 bg-pink-600 rounded-lg">
        <h4 class="text-lg font-bold mb-2 text-center">游戏说明</h4>
        <div class="text-sm space-y-1">
          <p>• 选择你喜欢的任务等级</p>
          <p>• 选择要组装的任务数量（1-5个）</p>
          <p>• 点击"组装任务"随机生成任务组合</p>
          <p>• 按照顺序完成所有任务</p>
          <p>• 无法完成的任务需要接受惩罚</p>
        </div>
      </div>
    </div>
  );
}

