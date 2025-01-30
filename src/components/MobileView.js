const MobileView = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 md:flex md:items-center md:justify-center">
            <div className="bg-black w-full h-full md:max-w-[350px] md:max-h-[630px] md:rounded-2xl overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto scrollbar-none p-4">{children}</div>
            </div>
        </div>
    );
};
export default MobileView