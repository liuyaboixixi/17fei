import { useEffect, useState } from "preact/hooks";

// 文件名到中文名称的直接映射
function getChineseNameByFilename(filename) {
    const nameMap = {
        "G-Spot-Sniper-Sex-Position-Illustration.jpg": "G点狙击",
        "Doggy-Style-Sex-Position-Illustration.jpg": "后入式",
        "69-Sex-Position-Illustration.jpg": "69式",
        "Mastery-Sex-Position-Illustration.jpg": "掌控式",
        "Asian-Cowgirl-Sex-Position-Illustration.jpg": "亚洲女牛仔",
        "Acrobat-Sex-Position-Illustration.jpg": "杂技式",
        "Amazon-Sex-Position-Illustration.jpg": "亚马逊式",
        "Anvil-Sex-Position-Illustration.jpg": "铁砧式",
        "Back-Seat-Driver-Sex-Position-Illustration.jpg": "后座司机",
        "Ballerina-Sex-Position.jpg": "芭蕾舞者",
        "Basset-Hound-Sex-Position-Illustration.jpg": "巴塞特猎犬",
        "Ben-Dover-Sex-Position-Illustration.jpg": "本·多佛",
        "Bended-Knee-Sex-Position-Illustration.jpg": "屈膝式",
        "Bent-Spoon-Sex-Position-Illustration.jpg": "弯勺式",
        "Betty-Rocker-Sex-Position-Illustration.jpg": "贝蒂摇滚",
        "Big-Dipper-Sex-Position-Illustration.jpg": "大北斗",
        "Bodyguard-Sex-Position-Illustration.jpg": "保镖式",
        "Book-Ends-Sex-Position.jpg": "书挡式",
        "Bouncing-Spoon-Sex-Position-Illustration.jpg": "弹跳勺",
        "Bridge-Sex-Position-Illustration.jpg": "桥式",
        "Brute-Sex-Position-Illustration.jpg": "蛮力式",
        "Bulldog-Sex-Position-Illustration.jpg": "斗牛犬",
        "Bumper-Cars-Sex-Position-Illustration.jpg": "碰碰车",
        "Burning-Man-Sex-Position-Illustration.jpg": "燃烧的人",
        "Butterfly-Sex-Position-Illustration.jpg": "蝴蝶式",
        "Chair-Riding-Sex-Position-Illustration.jpg": "骑椅式",
        "Coital-Alignment-Technique-Sex-Position-Illustration.jpg": "性交对齐技术",
        "Corner-Cowgirl-Sex-Position-Illustration.jpg": "角落女牛仔",
        "Corner-Doggy-Style-Sex-Position-Illustration.jpg": "角落后入式",
        "Cowboy-Sex-Position-Illustration.jpg": "牛仔式",
        "Cowgirl-Sex-Position-Illustration.jpg": "女牛仔",
        "Crab-Sex-Position-Illustration.jpg": "螃蟹式",
        "Criss-Cross-Sex-Position-Illustration.jpg": "十字交叉",
        "Cross-Sex-Position-Illustration.jpg": "十字式",
        "Dancer-Sex-Position-Illustration.jpg": "舞者式",
        "Deckchair-Sex-Position-Illustration.jpg": "躺椅式",
        "Deep-Impact-Sex-Position-Illustration-1.jpg": "深度冲击",
        "Delight-Sex-Position-Illustration.jpg": "愉悦式",
        "Down-Stroke-Sex-Position-Illustration.jpg": "下击式",
        "Drill-Sex-Position-Illustration.jpg": "钻头式",
        "Dublin-Shuffle-Sex-Position-Illustration.jpg": "都柏林洗牌",
        "Exposed-Eagle-Sex-Position-Illustration.jpg": "暴露的鹰",
        "Face-Off-69-Position-Illustration.jpg": "面对面69",
        "Fast-Fuck-Sex-Position-Illustration.jpg": "快速性爱",
        "Final-Furlong-Sex-Position-Illustration.jpg": "最后冲刺",
        "Fire-Hydrant-Sex-Position-Illustration.jpg": "消防栓",
        "Frog-Leap-Sex-Position-Illustration.jpg": "青蛙跳跃",
        "Golden-Gate-69-Position-Illustration.jpg": "金门69",
        "Hang-Loose-Sex-Position-Illustration.jpg": "放松悬挂",
        "High-Chair-Sex-Position-Illustration.jpg": "高椅式",
        "Intersection-Sex-Position-Illustration.jpg": "交叉路口",
        "Irish-Garden-Sex-Position-Illustration.jpg": "爱尔兰花园",
        "Italian-Hanger-Sex-Position-Illustration.jpg": "意大利衣架",
        "Jellyfish-Sex-Position-Illustration.jpg": "水母式",
        "Jockey-Sex-Position-Illustration.jpg": "骑师式",
        "Jughead-Sex-Position-Illustration.jpg": "傻瓜头",
        "Jugghead-Sex-Position-Illustration.jpg": "傻瓜头",
        "Launch-Pad-Sex-Position-Illustration.jpg": "发射台",
        "Lazy-Wheelbarrow-Sex-Position-Illustration.jpg": "懒人手推车",
        "Leap-Frog-Sex-Position-Illustration.jpg": "跳蛙式",
        "Leg-Glider-Sex-Position-Illustration.jpg": "腿部滑翔",
        "Legs-On-Shoulder-Sex-Position-Illustration.jpg": "腿在肩上",
        "Legs-Spread-Sex-Position-Illustration.jpg": "双腿张开",
        "Life-Raft-Sex-Position-Illustration.jpg": "救生筏",
        "Little-Dipper-Sex-Position-Illustration.jpg": "小北斗",
        "Lotus-Sex-Position-Illustration.jpg": "莲花式",
        "Lunge-Sex-Position-Illustration.jpg": "弓步式",
        "Mongolian-Smurf-Sex-Position-Illustration.jpg": "蒙古蓝精灵",
        "Mongolian-Smurfy-Sex-Position-Illustration.jpg": "蒙古蓝精灵",
        "Octopus-Sex-Position-Illustration.jpg": "章鱼式",
        "Piledriver-Sex-Position-Illustration.jpg": "打桩机",
        "Piston-Sex-Position-Illustration.jpg": "活塞式",
        "Poles-Apart-Sex-Position-Illustration.jpg": "两极分离",
        "Pump-Sex-Position-Illustration.jpg": "泵式",
        "Rear-Admiral-Sex-Position-Illustration.jpg": "后海军上将",
        "Rear-Entry-Sex-Position-Illustration.jpg": "后入式",
        "Right-Angle-Sex-Position-Illustration.jpg": "直角式",
        "Sandwich-Sex-Position-Illustration.jpg": "三明治式",
        "Scissors-Sex-Position-Illustration.jpg": "剪刀式",
        "See-Saw-Sex-Position-Illustration.jpg": "跷跷板",
        "Shoe-Shiner-Sex-Position-Illustration.jpg": "擦鞋匠",
        "Side-Entry-Missionary-Sex-Position-Illustration.jpg": "侧入传教士",
        "Side-Ride-Sex-Position-Illustration.jpg": "侧骑式",
        "Side-Saddle-Sex-Position-Illustration.jpg": "侧鞍式",
        "Sitting-Sex-Position.jpg": "坐式",
        "Sliding-Lady-Sex-Position-Illustration.jpg": "滑动女士",
        "Spooning-Sex-Position-Illustration.jpg": "勺子式",
        "Sporking-Sex-Position-Illustration.jpg": "叉勺式",
        "Stairway-To-Heaven-Sex-Position-Illustration.jpg": "天堂阶梯",
        "Stand-And-Carry-Sex-Position-Illustration.jpg": "站立携带",
        "Superwoman-Sex-Position-Illustration.jpg": "女超人",
        "Suspended-69-Position-Illustration.jpg": "悬空69",
        "Swiss-Miss-Sex-Position-Picture.jpg": "瑞士小姐",
        "Sybian-Sex-Position-Illustration.jpg": "赛比安",
        "Tea-Spooning-Sex-Position-Illustration.jpg": "茶勺式",
        "Thigh-Tide-Sex-Position-Illustration.jpg": "大腿潮汐",
        "Tug-Of-Love-Sex-Position-Illustration.jpg": "爱的拔河",
        "Turtle-Sex-Position-Illustration.jpg": "乌龟式",
        "Twister-Sex-Position-Illustration.jpg": "扭转式",
        "Viennese-Oyster-Sex-Position-Illustration.jpg": "维也纳牡蛎",
        "Washing-Machine-Sex-Position-Illustration.jpg": "洗衣机",
        "X-Marks-The-Post-Sex-Position-Illustration.jpg": "X标记柱子"
    };
    return nameMap[filename] || filename.replace('-Sex-Position-Illustration.jpg', '').replace('-Sex-Position.jpg', '');
}

export default function PositionList(params) {
    let { positions } = params;
    let [length, setLength] = useState(10);
    useEffect(function () {
        let vip = localStorage.getItem("vip") || true; // 默认解锁VIP
        if (vip) {
            setLength(positions.length);
        }
    }, []);
    return (
        <>
            <div class="grid grid-cols-2 gap-2">
                {positions.map((p, i) => {
                    if (i < length) {
                        const imageSrc = atob(p);
                        const filename = imageSrc.split('/').pop();
                        const chineseName = getChineseNameByFilename(filename);
                        
                        return (
                            <div key={i} class="relative">
                                <img 
                                    src={imageSrc} 
                                    class="rounded mx-auto block w-full h-48 object-cover bg-gray-200" 
                                />
                                <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                                    {chineseName}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            {false && (
                <div class="text-center p-4 underline">
                    <a href="/about">开通会员解锁全部(上百个)姿势</a>
                </div>
            )}
        </>
    );
}
