const MobileView = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 md:mb-6 md:mr-6">
            <div className="bg-black w-[300px] h-[528px] rounded-2xl overflow-hidden flex flex-col shadow-xl">
                <div className="flex-1 overflow-y-auto scrollbar-none p-4">{children}</div>
            </div>
        </div>
    );
};
export default MobileView