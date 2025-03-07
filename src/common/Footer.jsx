

export default function Footer() {
    return (
        <div className="bg-gray-800 text-white p-4 h-[calc(20vh)] sticky top-[100vh]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <span className="text-lg">
                    </span>
                    <a href="https://google.com" className="m-2">Google</a>
                    <a href="https://tailwindcss.com" className="m-2">Tailwind CSS</a>
                </div>
                <div className="flex flex-row justify-center p-2">
                    <span className="text-white">
                      Some Other Footer Text
                    </span>
                </div>
            </div>
        </div>          
    )   
}   
