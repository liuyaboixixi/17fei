import { useEffect, useState } from "preact/hooks";

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
                        return (
                            <div key={i} class="relative">
                                <img 
                                    src={imageSrc} 
                                    class="rounded mx-auto block w-full h-48 object-cover bg-gray-200" 
                                />
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
