// 浏览器控制台破解脚本 - 直接复制粘贴到控制台运行
(function() {
    console.log('🚀 开始破解VIP功能...');
    
    // 设置所有可能的VIP相关localStorage
    const vipKeys = [
        'vip', 'VIP', 'vip_status', 'vipStatus',
        'premium', 'premium_user', 'premiumUser',
        'paid', 'paid_user', 'paidUser',
        'lifetime', 'lifetime_member', 'lifetimeMember',
        'activation_code', 'activationCode', 'activation',
        'unlock_all', 'unlockAll', 'unlock_all_images', 'unlockAllImages',
        'unlock_all_themes', 'unlockAllThemes',
        'member', 'member_status', 'memberStatus',
        'subscription', 'subscription_status', 'subscriptionStatus',
        'access_level', 'accessLevel',
        'user_tier', 'userTier',
        'pro_user', 'proUser',
        'gold_member', 'goldMember',
        'diamond_member', 'diamondMember'
    ];
    
    // 设置所有VIP状态为true
    vipKeys.forEach(key => {
        localStorage.setItem(key, 'true');
        sessionStorage.setItem(key, 'true');
    });
    
    // 设置激活码相关
    localStorage.setItem('activation_code', '606060');
    localStorage.setItem('activation_verified', 'true');
    localStorage.setItem('code_verified', 'true');
    
    // 设置解锁状态
    localStorage.setItem('images_unlocked', 'true');
    localStorage.setItem('themes_unlocked', 'true');
    localStorage.setItem('all_features_unlocked', 'true');
    
    // 设置用户等级
    localStorage.setItem('user_level', '999');
    localStorage.setItem('access_level', '999');
    
    // 设置时间戳（模拟长期会员）
    const longTime = Date.now() + (365 * 24 * 60 * 60 * 1000); // 一年后
    localStorage.setItem('vip_expires', longTime);
    localStorage.setItem('premium_expires', longTime);
    localStorage.setItem('member_expires', longTime);
    
    // 设置全局变量
    window.isVip = true;
    window.isPremium = true;
    window.isPaid = true;
    window.isLifetime = true;
    window.activationVerified = true;
    window.vipStatus = 'active';
    window.userTier = 'diamond';
    
    // 重写可能的验证函数
    if (typeof window.checkVip === 'function') {
        window.checkVip = () => true;
    }
    if (typeof window.isVipUser === 'function') {
        window.isVipUser = () => true;
    }
    if (typeof window.checkActivation === 'function') {
        window.checkActivation = () => true;
    }
    
    console.log('✅ VIP破解完成！');
    console.log('📋 已设置的localStorage键值：');
    vipKeys.forEach(key => {
        console.log(`  ${key}: ${localStorage.getItem(key)}`);
    });
    
    console.log('🔄 请刷新页面查看效果');
    
    // 自动刷新页面
    setTimeout(() => {
        if (confirm('破解完成！是否刷新页面查看效果？')) {
            location.reload();
        }
    }, 1000);
})();
