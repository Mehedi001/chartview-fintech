import { IoNotificationsSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar bg-[#7180BF] px-10">
            <div className="flex-1 items-center">
                <img src="/logo.png" alt="" />
                <p className="text-xl text-white ms-4">FinTech</p>
            </div>
            <div className="flex-none gap-4">
                <IoNotificationsSharp className="text-2xl text-white" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="/avater.png" />
                        </div>
                    </div>
                    <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;