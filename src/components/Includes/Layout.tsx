const Layout = () => {
    return(
        <>
        <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg z-50">
            {/** 로고 */}
            <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">KMW</h1>
            <p className="text-sm text-gray-500">프론트 개발자</p>
            </div>
        </header>
        {/** 메뉴 */}
        <div className="flex items-center gap-x-6">
          <a href="#home" className="hover:text-blue-500 transition-colors">홈</a>
          <a href="#about" className="hover:text-blue-500 transition-colors"
            >소개</a
          >
          <a href="#skills" className="hover:text-blue-500 transition-colors"
            >기술</a
          >
          <a href="#projects" className="hover:text-blue-500 transition-colors"
            >프로젝트</a
          >
          <a href="#contact" className="hover:text-blue-500 transition-colors"
            >연락처</a
          >
       </div>
       </>
    );
}

export default Layout;