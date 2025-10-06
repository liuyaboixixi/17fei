import { useSignal } from "@preact/signals";
import { lotteryData, getTaskByLuckyNumber, validateLuckyNumber, generateRandomLuckyNumber } from "../lib/lottery.ts";

export default function LotteryIsland() {
  const luckyNumber = useSignal("1213");
  const showTaskModal = useSignal(false);
  const currentTask = useSignal(null);
  const errorMessage = useSignal("");
  const selectedType = useSignal<'女奴' | '男奴' | '恋爱'>('恋爱');

  const handleConfirm = () => {
    errorMessage.value = "";
    
    if (!validateLuckyNumber(luckyNumber.value)) {
      errorMessage.value = "请输入有效的四位数幸运数字";
      return;
    }

    // 根据选择的类型过滤任务
    const filteredTasks = lotteryData.tasks.filter(task => task.type === selectedType.value);
    if (filteredTasks.length === 0) {
      errorMessage.value = "该类型暂无任务";
      return;
    }

    // 简单的哈希算法，将幸运数字映射到过滤后的任务
    const hash = luckyNumber.value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const taskIndex = hash % filteredTasks.length;
    const task = filteredTasks[taskIndex];
    
    if (task) {
      currentTask.value = task;
      showTaskModal.value = true;
    } else {
      errorMessage.value = "未找到对应的任务，请尝试其他数字";
    }
  };

  const handleCancel = () => {
    showTaskModal.value = false;
    currentTask.value = null;
  };

  const handleCloseModal = () => {
    showTaskModal.value = false;
    currentTask.value = null;
  };

  const handleRandomNumber = () => {
    luckyNumber.value = generateRandomLuckyNumber();
    errorMessage.value = "";
  };


  return (
    <div class="lottery-page">
      {/* 顶部导航栏 */}
      <div class="lottery-header">
        <div class="header-left">
          <button class="back-btn" onClick={() => window.history.back()}>
            ←
          </button>
        </div>
        <div class="header-center">
          <h1>抽奖</h1>
        </div>
        <div class="header-right">
          <select 
            class="type-dropdown"
            value={selectedType.value}
            onChange={(e) => selectedType.value = e.target.value as '女奴' | '男奴' | '恋爱'}
          >
            <option value="女奴">女奴</option>
            <option value="男奴">男奴</option>
            <option value="恋爱">恋爱</option>
          </select>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div class="lottery-content">
        <div class="task-title">
          <h2>💕 幸运数字抽取任务 💕</h2>
        </div>
        
               <div class="task-description">
                 <p>✨ 请在下方输入一个四位数的幸运数字,点击确认即可抽取 ✨</p>
                 <p>🔥 任务列表,请依次完成哦 🔥</p>
               </div>



        <div class="input-section">
          <label class="input-label">幸运数字:</label>
          <div class="input-container">
            <input
              type="text"
              class="lucky-input"
              value={luckyNumber.value}
              onInput={(e) => {
                const value = (e.target as HTMLInputElement).value;
                if (value.length <= 4 && /^\d*$/.test(value)) {
                  luckyNumber.value = value;
                }
              }}
              placeholder="请输入四位数"
              maxLength={4}
            />
            <button class="random-btn" onClick={handleRandomNumber}>
              随机
            </button>
          </div>
        </div>

        {errorMessage.value && (
          <div class="error-message">
            {errorMessage.value}
          </div>
        )}

        <div class="action-buttons">
          <button class="cancel-btn" onClick={handleCancel}>
            取消
          </button>
          <button class="confirm-btn" onClick={handleConfirm}>
            确认
          </button>
        </div>
      </div>

      {/* 任务列表模态框 */}
      {showTaskModal.value && currentTask.value && (
        <div class="modal-overlay" onClick={handleCloseModal}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            <div class="modal-header">
              <h3>🔥 任务列表 🔥</h3>
            </div>
            
                   <div class="modal-body">
                     {/* 任务信息 */}
                     <div class="task-info">
                       <div class="task-header">
                         <h4 class="task-title">{currentTask.value.title}</h4>
                         <span class="task-type">{currentTask.value.type}</span>
                       </div>
                       <p class="task-description">{currentTask.value.description}</p>
                     </div>

              <div class="tools-section">
                <span class="tools-label">🛠️ 工具:</span>
                <div class="tools-list">
                  {currentTask.value.tools.map((tool, index) => (
                    <span key={index} class="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div class="content-section">
                <span class="content-label">📋 内容:</span>
                <div class="task-list">
                  {currentTask.value.content.map((task, index) => (
                    <div key={index} class="task-item">
                      <span class="task-number">{index + 1}.</span>
                      <span class="task-text">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div class="modal-footer">
              <button class="modal-confirm-btn" onClick={handleCloseModal}>
                确认
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
