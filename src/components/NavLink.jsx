function NavLink({href, text}) {
    return (
        <a href = {href} className="text-sm text-stone-600 hover:text-stone-900">
            {text}
        </a>
    );
}
export default NavLink;