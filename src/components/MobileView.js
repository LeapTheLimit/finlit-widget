const MobileView = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-black w-full h-full md:max-w-[350px] md:max-h-[630px] md:rounded-2xl overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto scrollbar-none p-4">{children}</div>
            </div>
        </div>
    );
};
export default MobileView