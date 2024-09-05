/*
 * Enum for nav-items
 * Used to keep track of the currently selected nav item
 * @readonly
*/

const NavItem = Object.freeze({
    All:   Symbol("all"),
    Today:  Symbol("today"),
    Week:  Symbol("week"),
    Completed:  Symbol("completed"),
    Project:  Symbol("project"), // a project
});

export default NavItem

