export const HeaderNavigation = () => {

    return (
        <ul className="h-full flex items-end px-[30px] gap-5 text-xs">
            {/* 首页 关于 标签 归档 友链 */}
            <li className="pb-5"><a href="/">首页</a></li>
            <li className="pb-5"><a href="/about">关于</a></li>
            <li className="pb-5"><a href="/tags">标签</a></li>
            <li className="pb-5"><a href="/archives">归档</a></li>
            <li className="pb-5"><a href="/links">友链</a></li>
        </ul>
    )
}